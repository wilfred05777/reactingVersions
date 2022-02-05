import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ClockClass from "./ClockClass";
import FormattedDate from "./FormattedDate";
import FormToggle from "./Components/Form/Form";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ClockClass /> */}
    {/* <FormattedDate /> */}
    {/* <FormToggle /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
