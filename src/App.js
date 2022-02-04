import React from "react";
import Clock from "./Clock";

const App = (props) => {
  return (
    <div>
      <h1> Hello, World!</h1>
      {/* <h2>It is {props.date.toLocaleTimeString()}</h2> */}
      <Clock />
    </div>
  );
};

export default App;
