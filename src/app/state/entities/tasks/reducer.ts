import * as types from "./types";

const initialState: types.Task[] = [];

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, action.task];

    case types.UPDATE_TASK:
      return state.map(task => {
        if (task.id === action.id) {
          const { type, ...updatedTask } = action;
          return Object.assign({}, task, updatedTask);
        }

        return task;
      });

    case types.DELETE_TASK:
      return state.filter(task => task.id !== action.id);

    default:
      return state;
  }
}
