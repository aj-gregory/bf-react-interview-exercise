import * as columnActions from "../actions";

describe("column actions", () => {
  let column;
  beforeEach(() => {
    column = { name: "test" };
  });

  it("should have a create column action", () => {
    const createColumn = columnActions.createColumn(column);
    expect(Object.keys(createColumn).sort()).toEqual(["type", "column"].sort());
    expect(createColumn.type).toBe("CREATE_COLUMN");
    expect(Object.keys(createColumn.column).sort()).toEqual(
      ["taskIds", "id", "name"].sort()
    );
  });

  it("should have a delete column action", () => {
    const deleteColumn = columnActions.deleteColumn(123);
    expect(Object.keys(deleteColumn).sort()).toEqual(["id", "type"].sort());
    expect(deleteColumn.type).toBe("DELETE_COLUMN");
  });

  it("should have an update column action", () => {
    const updateColumn = columnActions.updateColumn({
      id: 123,
      name: "updated",
      taskIds: [{ id: "23", name: "new task" }]
    });
    expect(Object.keys(updateColumn).sort()).toEqual(
      ["id", "name", "type", "taskIds"].sort()
    );
    expect(updateColumn.type).toBe("UPDATE_COLUMN");
  });

  it("should have a detach from column action", () => {
    const detachFromColumn = columnActions.detachFromColumn(123, 456);
    expect(Object.keys(detachFromColumn).sort()).toEqual(
      ["columnId", "taskId", "type"].sort()
    );
    expect(detachFromColumn.columnId).toBe(123);
    expect(detachFromColumn.taskId).toBe(456);
    expect(detachFromColumn.type).toBe("DETACH_FROM_COLUMN");
  });

  it("should have a add from column action", () => {
    const attachToColumn = columnActions.attachToColumn(123, 456);
    expect(Object.keys(attachToColumn).sort()).toEqual(
      ["columnId", "taskId", "type"].sort()
    );
    expect(attachToColumn.columnId).toBe(123);
    expect(attachToColumn.taskId).toBe(456);
    expect(attachToColumn.type).toBe("ADD_TO_COLUMN");
  });
});
