import React from "react";
import { Droppable } from "react-beautiful-dnd";
import uuid from "uuid";
import Editable from "../Editable/Editable";
import { columnActions, columnTypes } from "../../state/entities/columns";
import { taskActions } from "../../state/entities/tasks";
import Tasks from "../Tasks";
import { ColumnHeader, StyledColumn } from "./styled.components";

interface ColumnProps {
  column: columnTypes.Column;
  dispatch: Function;
}

const Column: React.FC<ColumnProps> = ({ column, dispatch }) => {
  const createTask = () => {
    const name = "New task";
    const id = uuid.v4();
    dispatch(taskActions.createTask({ id, name }));
    return id;
  };

  const addTask = id => {
    const newTaskID = createTask();
    dispatch(columnActions.attachToColumn(id, newTaskID));
  };

  const deleteColumn = column => {
    column.taskIds.map(taskId => dispatch(taskActions.deleteTask(taskId)));
    dispatch(columnActions.deleteColumn(column.id));
  };

  const deleteTask = (columnId, taskId) => {
    dispatch(columnActions.detachFromColumn(columnId, taskId));
    dispatch(taskActions.deleteTask(taskId));
  };

  const editTask = (name, id) => {
    dispatch(taskActions.updateTask({ id, name, editing: false }));
  };

  const editColumn = name => {
    const columnId = column.id;
    dispatch(
      columnActions.updateColumn({ id: columnId, name, editing: false })
    );
  };

  return (
    <Droppable droppableId={column.id} type="TaskList">
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <StyledColumn>
            <ColumnHeader>
              <div className="column-add-task">
                <button onClick={() => addTask(column.id)}>+</button>
              </div>
              <Editable
                className="column-name"
                editing={column.editing}
                value={column.name}
                onValueClick={() =>
                  dispatch(
                    columnActions.updateColumn({
                      id: column.id,
                      editing: true
                    })
                  )
                }
                onEdit={editColumn}
              />
              <div className="column-delete">
                <button onClick={() => deleteColumn(column)}>x</button>
              </div>
            </ColumnHeader>

            <Tasks
              taskIds={column.taskIds}
              columnId={column.id}
              onValueClick={id =>
                dispatch(taskActions.updateTask({ id, editing: true }))
              }
              onEdit={editTask}
              onDelete={deleteTask}
            />
          </StyledColumn>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
