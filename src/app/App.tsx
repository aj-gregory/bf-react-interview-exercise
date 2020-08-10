import React from "react";
import { hot } from "react-hot-loader/root";
import Page from "./components/Page";
import DevTools from "./components/Devtools";

function App() {
  return (
    <div>
      <Page />
      <DevTools />
    </div>
  );
}

export default hot(App);
