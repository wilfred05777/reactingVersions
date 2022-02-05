import React from "react";

const FormForm = () => {
  //   function Form() {
  //     function handleSubmit(e) {
  //       e.preventDefault();
  //     }
  //   }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You Click Submit");
  };
  return (
    <div>
      <div>FORM FORM</div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormForm;
