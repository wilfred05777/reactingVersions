import React from "react";

// https://reactjs.org/docs/state-and-lifecycle.html
// Adding Local State to a Class

const Tick = (props) => {
  return (
    <div>
      <h2>Tick</h2>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Tick;
