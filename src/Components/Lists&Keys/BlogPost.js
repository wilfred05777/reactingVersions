import React from "react";

const Blog = (props) => {
  //   const posts = [
  //     { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  //     {
  //       id: 2,
  //       title: "Installation",
  //       content: "You can install React from npm.",
  //     },
  //   ];

  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
};
export default Blog;
