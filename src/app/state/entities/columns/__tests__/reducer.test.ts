import * as types from "../types";
import reducer from "../reducer";

describe("column reducer", () => {
  it("should add a column", () => {
    expect(
      reducer(undefined, {
        type: types.CREATE_COLUMN,
        column: { id: "123", taskIds: [], name: "test", editing: false }
      })
    ).toEqual([{ id: "123", taskIds: [], name: "test", editing: false }]);
  });

  it("should delete a column", () => {
    expect(
      reducer(
        [
          { id: "123", taskIds: [], name: "test", editing: false },
          { id: "456", taskIds: [], name: "test2", editing: false }
        ],
        {
          type: types.DELETE_COLUMN,
          id: "456"
        }
      )
    ).toEqual([{ id: "123", taskIds: [], name: "test", editing: false }]);
  });

  it("should update a column", () => {
    expect(
      reducer([{ id: "123", taskIds: [], name: "test", editing: false }], {
        type: types.UPDATE_COLUMN,
        id: "123",
        name: "updated"
      })
    ).toEqual([{ id: "123", taskIds: [], name: "updated", editing: false }]);
    expect(
      reducer([{ id: "123", taskIds: [], name: "test", editing: false }], {
        type: types.UPDATE_COLUMN,
        id: "987",
        name: "not-found"
      })
    ).toEqual([{ id: "123", taskIds: [], name: "test", editing: false }]);
  });

  it("should add to a column", () => {
    expect(
      reducer([{ id: "123", taskIds: [], name: "test", editing: false }], {
        type: types.ADD_TO_COLUMN,
        columnId: "123",
        taskId: "4546"
      })
    ).toEqual([{ id: "123", taskIds: ["4546"], name: "test", editing: false }]);
    expect(
      reducer([{ id: "123", taskIds: [], name: "test", editing: false }], {
        type: types.ADD_TO_COLUMN,
        columnId: 987,
        taskId: "4546"
      })
    ).toEqual([{ id: "123", taskIds: [], name: "test", editing: false }]);
  });

  it("should push onto stack for tasks", () => {
    expect(
      reducer(
        [
          {
            id: "123",
            taskIds: ["1234", "2345", "3456"],
            name: "test",
            editing: false
          }
        ],
        {
          type: types.ADD_TO_COLUMN,
          columnId: "123",
          taskId: "4567"
        }
      )
    ).toEqual([
      {
        id: "123",
        taskIds: ["4567", "1234", "2345", "3456"],
        name: "test",
        editing: false
      }
    ]);
  });

  it("should detach from a column", () => {
    expect(
      reducer(
        [{ id: "123", taskIds: ["4546"], name: "test", editing: false }],
        {
          type: types.DETACH_FROM_COLUMN,
          columnId: "123",
          taskId: "4546"
        }
      )
    ).toEqual([{ id: "123", taskIds: [], name: "test", editing: false }]);
    expect(
      reducer(
        [{ id: "123", taskIds: ["4546"], name: "test", editing: false }],
        {
          type: types.DETACH_FROM_COLUMN,
          columnId: "987",
          taskId: "4546"
        }
      )
    ).toEqual([{ id: "123", taskIds: ["4546"], name: "test", editing: false }]);
  });

  it("should return state as default", () => {
    expect(
      reducer([{ id: "123", taskIds: [], name: "test", editing: false }], {
        type: "NOT_AN_ACTION",
        payload: { cool: "things" }
      })
    ).toEqual([{ id: "123", taskIds: [], name: "test", editing: false }]);
  });
});
