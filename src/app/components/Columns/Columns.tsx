import React from "react";
import Column from "../Column";
import { DragDropContext } from "react-beautiful-dnd";
import { columnActions, columnTypes } from "../../state/entities/columns";
import { ColumnsContainer } from "./styled.components";

interface ColumnsProps {
  columns: columnTypes.Column[];
  dispatch: Function;
}

const Columns: React.FC<ColumnsProps> = ({ columns, dispatch }) => {
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    if (result.destination.droppableId === result.source.droppableId) {
      return;
    }
    dispatch(
      columnActions.attachToColumn(
        result.destination.droppableId,
        result.draggableId
      )
    );
    dispatch(
      columnActions.detachFromColumn(
        result.source.droppableId,
        result.draggableId
      )
    );
  };

  return (
    <ColumnsContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(column => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>
    </ColumnsContainer>
  );
};

export default Columns;
