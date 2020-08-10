import * as taskActions from "../actions";

describe("task actions", () => {
  let task;
  beforeEach(() => {
    task = { id: 123, name: "test task" };
  });

  it("should have an action to create a task", () => {
    const createTask = taskActions.createTask(task);
    expect(Object.keys(createTask).sort()).toEqual(["type", "task"].sort());
    expect(createTask.type).toBe("CREATE_TASK");
    expect(Object.keys(createTask.task).sort()).toEqual(["id", "name"].sort());
  });

  it("should have an action to update a task", () => {
    const updateTask = taskActions.updateTask(task);
    expect(Object.keys(updateTask).sort()).toEqual(
      ["type", "id", "name"].sort()
    );
    expect(updateTask.type).toBe("UPDATE_TASK");
    expect(updateTask.id).toBe(123);
    expect(updateTask.name).toBe("test task");
  });

  it("should have an action to update a task", () => {
    const deleteTask = taskActions.deleteTask(123);
    expect(Object.keys(deleteTask).sort()).toEqual(["type", "id"].sort());
    expect(deleteTask.type).toBe("DELETE_TASK");
    expect(deleteTask.id).toBe(123);
  });
});
