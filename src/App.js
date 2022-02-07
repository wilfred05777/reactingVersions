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
import NumberListsAndKeys from "./Components/Lists&Keys/ListsAndKeys";
import BlogPost from "./Components/Lists&Keys/BlogPost";

const App = (props) => {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "hello Kity",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };

  const numbers = [1, 2, 3, 4, 5];

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];
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
      {/* <FormToggle /> */}

      {/* <FormForm /> */}

      {/* <Toggle /> */}

      {/* <LoggingButton /> */}

      {/* <LoginControl /> */}

      <NumberListsAndKeys numbers={numbers} />

      <BlogPost posts={posts} />
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
