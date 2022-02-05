import React from "react";
import Clock from "./Clock";
import ComponentProps from "./ComponentProps";
import Comment from "./Comment";
import Tick from "./Tick";
import ClockClass from "./ClockClass";
import FormToggle from "./Components/Form/Form";
import FormForm from "./Components/Form/FormForm";
import Toggle from "./Components/Toggle/Toggle";
import LoggingButton from "./Components/LoggingButton/LoggingButton";
import LoginControl from "./Components/ConditionalRendering/LoginControl";

const App = (props) => {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "hello Kity",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };

  return (
    <div>
      {/* <h1> Hello, World!</h1> */}
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}

      {/* <ComponentProps name="Components Props" /> */}
      {/* <Tick /> */}
      {/* <Clock /> */}
      {/* <ClockClass /> */}
      {/* <FormToggle />

      <FormForm />

      <Toggle /> */}

      {/* <LoggingButton /> */}

      <LoginControl />
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
