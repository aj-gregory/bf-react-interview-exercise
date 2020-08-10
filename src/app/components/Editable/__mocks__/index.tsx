// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

export default jest
  .fn()
  .mockImplementation(props => (
    <div data-testid="Editable">{props.children}</div>
  ));
