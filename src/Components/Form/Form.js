import React from "react";
import { Component } from "react/cjs/react.production.min";

// https://reactjs.org/docs/handling-events.html

class FormToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("You Clicked");
  // };

  render() {
    return (
      <div>
        <div>
          {/* <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
          </form> */}

          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    );
  }
}

export default FormToggle;
