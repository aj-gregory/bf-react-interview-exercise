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
            taskIds: [action.taskId, ...col.taskIds]
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

    case types.UPDATE_TASK_ORDER:
      return state.map(column => {
        if (column.id === action.columnId) {
          let taskIds = [...column.taskIds];
          // console.log(taskIds);
          if (action.sourceIndex === -1) {
            action.sourceIndex = column.taskIds.length - 1;
          }
          if (action.destinationIndex === -1) {
            action.destinationIndex = column.taskIds.length - 1;
          }
          let taskId = taskIds.splice(action.sourceIndex, 1);
          taskIds.splice(action.destinationIndex, 0, ...taskId);
          // console.log(taskIds);
          return Object.assign({}, column, {
            taskIds: [...taskIds]
          });
        }
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
    case types.DELETE_COLUMN:
      return state.filter(column => column.id !== action.id);
    default:
      return state;
  }
}
