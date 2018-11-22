import * as fastify from "fastify";
import * as http from "http";
import { AuthToken } from "../authz/token";
import logger from "../lib/logger";

export interface AuthenticatedRequest extends fastify.FastifyRequest<http.IncomingMessage> {
  user: AuthToken;
}
export interface SuccessResponse {
  apiVersion: string;
  data: any;
}

export interface ErrorResponse {
  apiVersion: string;
  error: {
    code: number;
    message: string;
  };
}

export type HttpStatusCode = number;
export type HttpResponse = [HttpStatusCode, SuccessResponse | ErrorResponse];

export const throwParseError = (badKeys, message?) => {
  logger.error({ error: { badKeys, message } }, "Parsing error occured");
  throw { kind: "ParseError", badKeys, message };
};

export const throwParseErrorIfUndefined = (obj, path) => {
  try {
    const val = path.reduce((acc, x) => acc[x], obj);
    logger.debug({ parsedValues: { obj, path, val } }, "Checking parsed values");
    if (val === undefined) {
      logger.error({ error: { obj, path, val } }, "value undefinded");
      throw Error("catchme");
    }
  } catch (_err) {
    logger.error({ error: _err }, "An error occured");
    throwParseError([path.join(".")]);
  }
};
