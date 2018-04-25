import def from './default';

const en = {
  ...def,
  common: {
    cancel: 'Cancel',
    next: 'Next',
    submit: 'Submit',
    back: 'Back',
    finish: 'Finish',
    comment_description: 'Add some comments',
    budget: 'Budget',
    comment: 'Comment',
    created: 'Created',
    status: 'Status',
    actions: 'Actions',
    assigned: 'Assigned',
    not_assigned: 'Not assigned',
    not_assigned_budget: 'Not Assigned Budget',
    disbursement: 'Projected',
    assigned_budget: 'Assigned',
    disbursed_budget: 'Disbursed',
    budget_distribution: 'Budget distribution',
    task_status: 'Task status',
    subprojects: 'Sub-projects',
    subproject: 'Sub-project',
    history: 'History',
    close: 'Close',
    open: 'Open',
    in_progress: 'In Progress',
    in_review: 'In Review',
    done: 'Done',
    assignees: 'Assignee(s)',
    approver: 'Approver',
    bank: 'Bank',
    assignee: 'Assignee',
    completion: 'Completion',
    username: 'Username',
    password: 'Password',
    incorrect_username: 'Incorrect username',
    incorrect_password: 'Incorrect password',
    added: 'Added'
  },

  adminDashboard: {
    role_name_error: "Incorrect role name",
    role_organization_error: "Incorrect organization",
    roles: 'Roles',
    role: 'Role',
    new_role: 'New Role',
    users: 'Users',
    nodes: 'Nodes',
    organization: 'Organization',
    id: 'ID',
    read: 'Read',
    write: 'Write',
    admin: 'Admin',
    name: 'Name',
    full_name: 'Full Name',
    incorrect_full_name: 'Incorrect full name',
    role_not_exist_error: 'Role does not exist',
    new_user: 'New User',
    country: 'Country',
    address: 'Address',
    admin_login: 'Admin Login',
    title: 'Admin Dashboard',
    user_not_authorized: 'You are not authorized to perform this action'
  },

  login: {
    tru_budget_description: 'A blockchain-based solution for budget expenditure',
    environment: 'Environment',
    test_env: 'Test',
    production_env: 'Prod',
    accenture_tag: 'Developed by Emerging Technologies & Innovation @ Accenture',
    login_button_title: 'Login',
    loading: 'Loading ...'

  },
  project: {
    add_new_project: 'Add new project',
    project_details: 'Details',
    project_name: 'Name',
    project_budget: 'Budget',
    project_comment: 'Comment',
    project_roles: 'Roles',
    project_thumbnail: 'Thumbnail',
    project_title: 'Project title',
    project_title_description: 'Name of the project',
    project_budget_amount: 'Project budget amount',
    project_budget_amount_description: 'Budget for the project',
    project_currency: 'Currency',
    project_budget_authority_role: 'Select budget authority role',
    project_budget_authority_role_description: 'The authority enabled to modify the budget line of the project',
    project_implementing_authority_role: 'Select implementation authority role',
    project_implementing_authority_role_description: 'The authorities enabled to create and modify subprojects, define and execute workflow activities',
    project_disbursement_authority_role: 'Select disbursement authority role',
    project_disbursement_authority_role_description: 'The authorities enabled to approve financial transactions',
    project_authority_organization_search: 'Search organizations',
    project_authority_role_search: 'Search role',

  },
  subproject: {
    subproject_title: 'Sub-Project title',
    subproject_title_description: 'Name of the sub-project',
    subproject_budget_amount: 'Sub-project  budget amount',
    subproject_budget_amount_description: 'Budget for the sub-project',
    subproject_comment: 'Sub-project Comment',
    subproject_currency: 'Sub-project Currency',
    subproject_assigned_organization: 'Assigned Organization',
    subproject_add: 'Add new Sub-project',
    subproject_select_button: 'Select',
    subproject_completion_string: '{0} of {1} done'

  },
  workflow: {
    non_approval: 'Non-Approval',
    approval_required: 'Approval Required',
    edit_item: 'Edit Workflow item',
    add_item: 'Create Workflow item',
    workflow_title: 'Workflow title',
    workflow_title_description: 'Name of the workflow',
    workflow_budget_amount: ' Workflow budget amount',
    workflow_budget_amount_description: 'Budget for the workflow',
    workflow_comment: 'Workflow Comment',
    workflow_type_workflow: 'Workflow',
    workflow_type_transaction: 'Transaction',
    workflow_action_open_in_progress: 'Pending on ',
    workflow_action_in_review: 'Pending for review of',
    workflow_action_pending_approval: 'Pending for approval of ',
    workflow_budget_status_na: 'N/A',
    workflow_budget_status_allocated: 'Assigned',
    workflow_budget_status_disbursed: 'Disbursed',
    workflow_next_step: 'Next step',
    workflow_no_actions: 'No actions required',
    workflow_none: 'None',
    workflow_enable_sort: 'Sort',
    worfkfow_disable_sort: 'Save',
    workflow_table_title: 'Workflow items',
    workflow_type: 'Type',
    workflow_documents: 'Documents',
    workflow_name: 'Name',
    workflow_document_name: 'Document Name',
    workflow_document_description: 'Add name of document',
    workflow_no_documents: 'No documents',
    workflow_document_validate: 'Validate',
    workflow_document_validated: 'Validated',
    workflow_document_changed: 'Changed',
    workflow_upload_document: 'Upload',
    workflow_budget_na: 'Not applicable',
    workflow_budget_allocated: 'allocated',
    workflow_budget_disbursed: 'disbursed',
    workflow_budget: 'Workflow budget amount',
    workflow_budget_description: 'Budget for the workflow',
    workflow_submit_for_review: 'Submit for Review'
  },

  navigation: {
    unread_notifications: 'Unread Notifications',
    peers: 'Peers',
    connected_peers: 'Connected Peers',
    no_peers: 'No peers',
    logout: 'Logout',
    read_permission: 'Read',
    write_permission: 'Write',
    admin_permission: 'Admin',
    selections: 'Selections',
    options: 'Options',
    rtUpdates: 'Real-Time Updates',
    other_trustees: 'Other Trustees',
    menu_item_projects: 'Projects',
    menu_item_notifications: 'Notifications',
    menu_item_network: 'Network',
    main_site: 'Main',
    projects_site: 'Projects'
  },
  dashboard: {
    dashboard_title: 'The Blockchain network dashboard',
    dashboard_subtitle: 'Connected peers in the blockchain network',
    dashboard_card_text: ' The connected blockchain nodes are shown in the map below. You can click on the respective markers to obtain the exact location.'
  },
  notification: {
    notification_title: 'Notifications',
    notification_subtitle: 'Unread',
    notification_card_text: 'Please find your current notifications below. These display action items or information items to be dealt with.',
    notification_table_project: 'Project',
    notification_table_subproject: 'Subproject',
    notification_table_description: 'Description',
    notification_table_by: 'By',
    notification_table_role: 'Role',
    notification_table_all_read: 'all read',
    notification_table_view: 'View',
    create_workflow: 'Workflow {0} created ',
    edit_workflow: 'Workflow item {0} got adapted',
    create_transaction: 'Transaction {0} created ',
    edit_transaction: 'Transaction {0} got adapted',
    review_workflow: 'You are assigned to review the workflow item {0}',
    review_transaction: 'You are assigned to review the transaction {0}',
    done_workflow: 'Status of workflow {0} set to Done',
    done_transaction: 'Status of transaction {0} set to Done'
  },

  history: {
    edit_status: 'Status of workflow item {0} changed to {1}',
    edit_currency: 'Currency of workflow item {0} changed to {1} ',
    edit_amount: 'Amount of workflow item {0} changed from {1} to {2} ',
    edit_comment: 'Comment of workflow item {0} changed to {1} ',
    edit_addData: 'Additional data of workflow item {0} changed to {1} ',
    edit_workflowName: 'Name of workflow item {0} changed to {1} ',
    created_workflow: 'Workflow {0} created ',
    created_project: 'Project created ',
    created_subproject: 'Subproject {0} created',
    edit_amountType: 'Budget status of workflow item {0} changed from {1} to {2}',
    edit_documents: 'Documents changed for workflow item {0}',
    edit_subproject: 'Amount of {0} increased to {1}',
    first_sort: 'Moved {0} to first position',
    sort: 'Moved {0} after {1}'
  },
  permissions: {
    "project.assign": 'Assign project to others',
    "project.intent.grantPermission": 'Grant permissions',
    "project.intent.listPermissions": 'View permissions',
    "project.intent.revokePermission": 'Revoke permissions',
    "project.viewDetails": 'View project details',
    "project.viewSummary": 'View project in overview',
    "project.createSubproject": 'Create subprojects',
  },
  language: {
    german: 'German',
    french: 'Français',
    english: 'English',
  },
}
export default en;
