import React from "react";
import Enzyme, { mount } from "enzyme";
import configureStore from "redux-mock-store";
import Column from "../Column";
import Adapter from "enzyme-adapter-react-16";
import { DragDropContext } from "react-beautiful-dnd";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe("column component", () => {
  it("should have an add-task button that creates a task and adds it to the column", () => {
    const mockDispatch = jest.fn();
    const mountedWrapper = mount(
      <Provider store={mockStore({})}>
        <DragDropContext onDragEnd={jest.fn()}>
          <Column
            column={{ id: "123", name: "test", taskIds: [], editing: false }}
            dispatch={mockDispatch}
          />
        </DragDropContext>
      </Provider>
    );

    const clickHandler = mountedWrapper
      .find("button")
      .first()
      .prop("onClick");

    clickHandler && clickHandler({} as React.MouseEvent);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls).toEqual([
      [
        {
          task: {
            id: expect.any(String),
            name: "New task"
          },
          type: "CREATE_TASK"
        }
      ],
      [
        {
          columnId: "123",
          taskId: expect.any(String),
          type: "ADD_TO_COLUMN"
        }
      ]
    ]);
  });

  it("should have a delete-column button that deletes the task and all columns", () => {
    const mockDispatch = jest.fn();
    const mountedWrapper = mount(
      <Provider store={mockStore({})}>
        <DragDropContext onDragEnd={jest.fn()}>
          <Column
            column={{ id: "123", name: "test", taskIds: [], editing: false }}
            dispatch={mockDispatch}
          />
        </DragDropContext>
      </Provider>
    );

    const clickHandler = mountedWrapper
      .find("button")
      .last()
      .prop("onClick");

    clickHandler && clickHandler({} as React.MouseEvent);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch.mock.calls).toEqual([
      [
        {
          id: "123",
          type: "DELETE_COLUMN"
        }
      ]
    ]);
  });
});
