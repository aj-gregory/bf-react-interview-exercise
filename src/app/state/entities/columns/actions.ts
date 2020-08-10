import uuid from "uuid";
import * as types from "./types";

export function createColumn(column) {
  return {
    type: types.CREATE_COLUMN,
    column: {
      id: uuid.v4(),
      taskIds: column.taskIds || [],
      ...column
    }
  };
}

export function updateColumn(updatedColumn) {
  return {
    type: types.UPDATE_COLUMN,
    ...updatedColumn
  };
}

export function deleteColumn(id) {
  return {
    type: types.DELETE_COLUMN,
    id
  };
}

export function attachToColumn(columnId, taskId) {
  return {
    type: types.ADD_TO_COLUMN,
    columnId,
    taskId
  };
}

export function detachFromColumn(columnId, taskId) {
  return {
    type: types.DETACH_FROM_COLUMN,
    columnId,
    taskId
  };
}
