import { Ctx } from "../../../lib/ctx";
import { BusinessEvent } from "../business_event";
import { InvalidCommand } from "../errors/invalid_command";
import { NotAuthorized } from "../errors/not_authorized";
import { NotFound } from "../errors/not_found";
import { Identity } from "../organization/identity";
import { ServiceUser } from "../organization/service_user";
import * as UserRecord from "../organization/user_record";
import * as NotificationCreated from "./notification_created";
import * as Project from "./project";
import * as ProjectClosed from "./project_closed";
import { sourceProjects } from "./project_eventsourcing";

interface Repository {
  getProjectEvents(): Promise<BusinessEvent[]>;
  getUsersForIdentity(identity: Identity): Promise<UserRecord.Id[]>;
}

export async function closeProject(
  ctx: Ctx,
  issuer: ServiceUser,
  projectId: Project.Id,
  repository: Repository,
): Promise<{ newEvents: BusinessEvent[]; errors: Error[] }> {
  const projectEvents = await repository.getProjectEvents();
  const { projects } = sourceProjects(ctx, projectEvents);

  const project = projects.find(x => x.id === projectId);
  if (project === undefined) {
    return { newEvents: [], errors: [new NotFound(ctx, "project", projectId)] };
  }

  if (project.status === "closed") {
    // The project is already closed.
    return { newEvents: [], errors: [] };
  }

  // TODO make sure all subprojects are closed (and with them all workflowitems)

  // Create the new event:
  const projectClosed = ProjectClosed.createEvent(ctx.source, issuer.id, projectId);

  // Check authorization (if not root):
  if (issuer.id !== "root") {
    if (!Project.permits(project, issuer, ["project.close"])) {
      return {
        newEvents: [],
        errors: [new NotAuthorized(ctx, issuer.id, projectClosed)],
      };
    }
  }

  // Check that the new event is indeed valid:
  const { errors } = sourceProjects(ctx, projectEvents.concat([projectClosed]));
  if (errors.length > 0) {
    return { newEvents: [], errors: [new InvalidCommand(ctx, projectClosed, errors)] };
  }

  // Create notification events:
  let notifications: NotificationCreated.Event[] = [];
  if (project.assignee !== undefined && project.assignee !== issuer.id) {
    const recipients = await repository.getUsersForIdentity(project.assignee);
    notifications = recipients.map(recipient =>
      NotificationCreated.createEvent(ctx.source, issuer.id, recipient, projectClosed, projectId),
    );
  }

  return { newEvents: [projectClosed, ...notifications], errors: [] };
}
