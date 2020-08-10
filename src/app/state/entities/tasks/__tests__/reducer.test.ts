import * as types from "../types";
import reducer from "../reducer";

describe("task reducer", () => {
  it("should add a task", () => {
    expect(
      reducer(undefined, {
        type: types.CREATE_TASK,
        task: { id: "123", name: "test task", editing: false }
      })
    ).toEqual([{ id: "123", name: "test task", editing: false }]);
  });

  it("should update a task", () => {
    expect(
      reducer([{ id: "123", name: "test task", editing: false }], {
        type: types.UPDATE_TASK,
        id: "123",
        name: "cool task"
      })
    ).toEqual([{ id: "123", name: "cool task", editing: false }]);
    expect(
      reducer([{ id: "123", name: "test task", editing: false }], {
        type: types.UPDATE_TASK,
        id: "456",
        name: "update task"
      })
    ).toEqual([{ id: "123", name: "test task", editing: false }]);
  });

  it("should delete a task", () => {
    expect(
      reducer(
        [
          { id: "123", name: "test task", editing: false },
          { id: "456", name: "cool task", editing: false }
        ],
        { type: types.DELETE_TASK, id: "123" }
      )
    ).toEqual([{ id: "456", name: "cool task", editing: false }]);
  });

  it("should provide a default", () => {
    expect(
      reducer(
        [
          { id: "123", name: "test task", editing: false },
          { id: "456", name: "cool task", editing: false }
        ],
        { type: "NOT_AN_ACTION", id: "123" }
      )
    ).toEqual([
      { id: "123", name: "test task", editing: false },
      { id: "456", name: "cool task", editing: false }
    ]);
  });
});
