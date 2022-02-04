import React from "react";

const Tick = (props) => {
  return (
    <div>
      <h2>Tick</h2>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Tick;
