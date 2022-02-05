import React from "react";

class LoggingButton extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state
  //   }

  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <div className="LoggingButton">
        <button onClick={() => this.handleClick()}>Click Me</button>

        <div>
          {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
          <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
        </div>
      </div>
    );
  }
}

export default LoggingButton;
