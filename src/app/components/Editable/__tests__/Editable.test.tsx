import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Editable from "../Editable";
import { render, act, fireEvent } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe("editable component", () => {
  let container;

  it("should render in non-editing mode", () => {
    act(() => {
      container = render(
        <Editable
          value="new"
          onEdit={jest.fn()}
          onDelete={jest.fn()}
          onValueClick={jest.fn()}
          editing={false}
        />
      );
    });

    expect(container.queryByTestId("task-name")).not.toBeNull();
    expect(container.queryByTestId("task-name-input")).toBeNull();
  });

  it("should render in editing mode", () => {
    act(() => {
      container = render(
        <Editable
          value="new"
          onEdit={jest.fn()}
          onDelete={jest.fn()}
          onValueClick={jest.fn()}
          editing={true}
        />
      );
    });

    expect(container.queryByTestId("task-name-input")).not.toBeNull();
    expect(container.queryByTestId("task-name")).toBeNull();
  });

  it("calls onValueClick when clicked", () => {
    const mockValueClick = jest.fn();

    act(() => {
      container = render(
        <Editable
          value="new"
          onEdit={jest.fn()}
          onDelete={jest.fn()}
          onValueClick={mockValueClick}
          editing={false}
        />
      );
    });

    act(() => {
      fireEvent.click(container.getByTestId("edit-task"));
    });

    expect(mockValueClick).toHaveBeenCalled();
  });

  it("calls onDelete when the delete button is clicked", () => {
    const mockDelete = jest.fn();

    act(() => {
      container = render(
        <Editable
          value="new"
          onEdit={jest.fn()}
          onDelete={mockDelete}
          onValueClick={jest.fn()}
          editing={false}
        />
      );
    });

    act(() => {
      fireEvent.click(container.getByTestId("delete-task"));
    });

    expect(mockDelete).toHaveBeenCalled();
  });

  it("finishes edit when enter is pressed", async () => {
    const mockEdit = jest.fn();

    act(() => {
      container = render(
        <Editable
          value="a new val"
          onEdit={mockEdit}
          onDelete={jest.fn()}
          onValueClick={jest.fn()}
          editing={true}
        />
      );
    });

    await act(async () => {
      await fireEvent.change(container.getByTestId("task-name-input"), {
        target: { value: "a different value" }
      });
      await fireEvent.keyPress(container.getByTestId("task-name-input"), {
        key: "Enter",
        keyCode: 13
      });
    });

    expect(mockEdit).toHaveBeenCalledWith("a different value");
  });
});
