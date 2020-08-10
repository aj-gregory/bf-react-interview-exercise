export const CREATE_COLUMN = "CREATE_COLUMN";
export const UPDATE_COLUMN = "UPDATE_COLUMN";
export const DELETE_COLUMN = "DELETE_COLUMN";
export const ADD_TO_COLUMN = "ADD_TO_COLUMN";
export const DETACH_FROM_COLUMN = "DETACH_FROM_COLUMN";

export interface Column {
  id: string;
  name: string;
  editing: boolean;
  taskIds: string[];
}

export interface UpdateColumnAction {
  type: typeof UPDATE_COLUMN;
}
export interface DeleteColumnAction {
  type: typeof DELETE_COLUMN;
}
export interface AddToColumnAction {
  type: typeof ADD_TO_COLUMN;
}
export interface DetatchFromColumnAction {
  type: typeof DETACH_FROM_COLUMN;
}

export type ColumnAction =
  | UpdateColumnAction
  | DeleteColumnAction
  | AddToColumnAction
  | DetatchFromColumnAction;
