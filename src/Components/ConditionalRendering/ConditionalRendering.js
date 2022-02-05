import React from "react";
// https://reactjs.org/docs/conditional-rendering.html

const LoginButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Login</button>
    </div>
  );
};

const LogoutButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
};

const UserGreeting = (props) => {
  return <h1>Welcomeback</h1>;
};
const GuestGreeting = (props) => {
  return <h1>Please sign up</h1>;
};

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

module.exports = {
  LoginButton,
  LogoutButton,
  Greeting,
};
// export default  {
//     LoginButton,
// }
