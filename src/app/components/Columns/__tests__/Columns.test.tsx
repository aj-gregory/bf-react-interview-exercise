import React from "react";
import Enzyme, { shallow } from "enzyme";
import Columns from "../Columns";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Columns component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Columns
        columns={[{ id: "123", name: "test", taskIds: [], editing: false }]}
        dispatch={jest.fn()}
      />
    );
  });

  it("should have an onDragEnd fucntion", () => {
    const componentProps = wrapper.children().props();
    expect(componentProps.onDragEnd).toBeTruthy();
    expect(componentProps.onDragEnd({ destination: null })).toBeUndefined();
    expect(
      componentProps.onDragEnd({
        destination: { droppableId: 1 },
        source: { droppableId: 1 }
      })
    ).toBeUndefined();
  });
});
