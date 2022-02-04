import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

// https://reactjs.org/docs/components-and-props.html

const Comment = (props) => {
  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  //   const comment = {
  //     date: new Date(),
  //     text: "I hope you enjoy learning React!",
  //     author: {
  //       name: "hello Kity",
  //       avatarUrl: "http://placekitten.com/g/64/64",
  //     },
  //   };

  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          <p>Avatar ComponentProps</p>
          <Avatar user={props.author} />
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        <p>Userinfo ComponentProps</p>
        <UserInfo user={props.author} />
        {props.text}
      </div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
};

export default Comment;
