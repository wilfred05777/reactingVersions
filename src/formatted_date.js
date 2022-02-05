import React from "react";

const formatted_Date = (props) => {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
};

export default formatted_Date;
