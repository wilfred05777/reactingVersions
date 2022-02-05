import React from "react";
import { Component } from "react/cjs/react.production.min";

// https://reactjs.org/docs/handling-events.html

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("You Clicked");
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
