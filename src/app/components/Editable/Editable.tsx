import React from "react";

interface EditableProps {
  value: string;
  editing: boolean;
  className?: string;
  onDelete?: () => void;
  onValueClick: () => void;
  onEdit: (value: string) => void;
}

const Editable: React.FC<EditableProps> = ({
  value,
  editing,
  className,
  onDelete,
  onValueClick,
  onEdit
}) => {
  const [currentValue, setCurrentValue] = React.useState(value);

  const updateValue = e => {
    setCurrentValue(e.currentTarget.value);
  };

  const finishEdit = () => {
    if (onEdit && currentValue.trim()) {
      onEdit(currentValue);
    }
  };

  const checkEnter = ({ key }) => {
    if (key === "Enter") {
      finishEdit();
    }
  };

  const renderEdit = () => {
    return (
      <input
        data-testid="task-name-input"
        type="text"
        autoFocus={true}
        defaultValue={currentValue}
        onKeyPress={checkEnter}
        onChange={updateValue}
        onBlur={finishEdit}
      />
    );
  };

  const renderDelete = () => {
    return (
      <button data-testid="delete-task" className="delete" onClick={onDelete}>
        x
      </button>
    );
  };

  const renderValue = () => {
    return (
      <div data-testid="edit-task" onClick={onValueClick}>
        <span data-testid="task-name" className="value">
          {value}
        </span>
        {onDelete ? renderDelete() : null}
      </div>
    );
  };

  return (
    <div className={className}>{editing ? renderEdit() : renderValue()}</div>
  );
};

export default Editable;
