import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ClockClass from "./ClockClass";
import FormattedDate from "./FormattedDate";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClockClass /> */}
    <FormattedDate />
  </React.StrictMode>,
  document.getElementById("root")
);
