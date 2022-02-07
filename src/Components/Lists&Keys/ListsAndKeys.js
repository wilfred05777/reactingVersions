import Reacts from "react";
// https://reactjs.org/docs/lists-and-keys.html

const NumberListsAndKeys = (props) => {
  //   const numbers = [1, 2, 3, 4, 5];
  const numbers = props.numbers;

  //   const listsItems = numbers.map((number) => <li>{number}</li>);
  //   const listsItemss = numbers.map((number) => <li>{number}</li>);

  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));

  //   const todoItems = todo.map((todo) => <li key={todo.id}>{todo.text}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
      {/* <p>listsItemss</p>
      <ul>{listsItemss}</ul> */}
    </div>
  );
};

export default NumberListsAndKeys;
