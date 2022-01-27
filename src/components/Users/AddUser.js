import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form onSubmit={addUserHandler}>
        <div className="form__input">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div className="form__input">
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" />
        </div>
        <div className="form__input">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
