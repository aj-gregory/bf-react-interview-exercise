import * as types from "./types";

const initialState: types.Column[] = [];

export default function columns(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COLUMN:
      return [...state, action.column];
    case types.ADD_TO_COLUMN:
      return state.map(col => {
        if (col.id === action.columnId) {
          return Object.assign({}, col, {
            taskIds: [...col.taskIds, action.taskId]
          });
        } else {
          return col;
        }
      });
    case types.UPDATE_COLUMN:
      return state.map(column => {
        if (column.id === action.id) {
          const { type, ...updatedColumn } = action;
          return Object.assign({}, column, updatedColumn);
        }

        return column;
      });

    case types.DETACH_FROM_COLUMN:
      return state.map(column => {
        if (column.id === action.columnId) {
          return Object.assign({}, column, {
            taskIds: column.taskIds.filter(id => id !== action.taskId)
          });
        }

        return column;
      });
    default:
      return state;
  }
}
