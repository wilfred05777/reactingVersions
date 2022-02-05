import React from "react";

// const formatted_Date = (props) => {
//   return <h2>It is {props.date.toLocaleTimeString()}</h2>;
// };

import Formatted_Date from "./formatted_date";
class FormattedDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <div>
          <Formatted_Date date={this.state.date} />
        </div>
      </div>
    );
  }
}

export default FormattedDate;
