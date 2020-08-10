import * as types from "./types";

export function createTask(task) {
  return {
    type: types.CREATE_TASK,
    task: {
      ...task
    }
  };
}
export function updateTask(updatedTask) {
  return {
    type: types.UPDATE_TASK,
    ...updatedTask
  };
}
export function deleteTask(id) {
  return {
    type: types.DELETE_TASK,
    id
  };
}
