import React from "react";
import Clock from "./Clock";
import ComponentProps from "./ComponentProps";
import Comment from "./Comment";
import Tick from "./Tick";
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
      <Tick />
      <Clock date={new Date()} />
    </div>
  );
};

export default App;
