export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export interface Task {
  id: string;
  name: string;
  editing: boolean;
}

export interface CreateTask {
  type: typeof CREATE_TASK;
}
export interface UpdateTask {
  type: typeof UPDATE_TASK;
}
export interface DeleteTask {
  type: typeof DELETE_TASK;
}

export type TaskAction = CreateTask | UpdateTask | DeleteTask;
