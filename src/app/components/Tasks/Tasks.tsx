import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../state/entities/tasks/types";
import Editable from "../Editable/Editable";

interface TasksProps {
  taskIds: string[];
  tasks: Task[];
  columnId: string;
  onValueClick: Function;
  onEdit: Function;
  onDelete: Function;
}

const Tasks: React.FC<TasksProps> = ({
  taskIds,
  tasks,
  columnId,
  onValueClick,
  onEdit,
  onDelete
}) => {
  return (
    <ul className="tasks">
      {taskIds.map(taskId => {
        const task = tasks.find(e => e.id === taskId);
        return task ? (
          <Draggable draggableId={taskId} index={0} key={taskId}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <li className="task" id={`task-${task.id}`} key={task.id}>
                  <Editable
                    editing={task.editing}
                    value={task.name}
                    onValueClick={() => onValueClick(task.id)}
                    onEdit={value => onEdit(value, task.id)}
                    onDelete={() => onDelete(columnId, task.id)}
                  />
                </li>
              </div>
            )}
          </Draggable>
        ) : null;
      })}
    </ul>
  );
};

export default Tasks;
