import React from "react";
import Columns from "../Columns";
import { columnActions } from "../../state/entities/columns";
import { Column } from "../../state/entities/columns/types";

interface PageProps {
  columns: Column[];
  dispatch: Function;
}

const Page: React.FC<PageProps> = ({ columns, dispatch }) => {
  const createColumn = () => {
    dispatch(
      columnActions.createColumn({
        name: "New column"
      })
    );
  };

  return (
    <div>
      <button className="add-column" onClick={createColumn}>
        +
      </button>
      <Columns columns={columns} />
    </div>
  );
};

export default Page;
