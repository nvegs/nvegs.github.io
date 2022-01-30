import React from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form
        onSubmit={addUserHandler}
        className="mx-auto text-center text-gray-600 p-4"
      >
        <h1 className="text-3xl font-bold">ADD USERS</h1>

        <div className="py-4">
          {/* <label htmlFor="username" className="px-4">
            Username
          </label> */}
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-[300px] h-8 px-2 border-2 rounded-2xl border-sky-300"
          />
        </div>

        <div className="py-4">
          {/* <label htmlFor="age" className="px-4">
            Age (Years)
          </label> */}
          <input
            type="number"
            id="age"
            placeholder="Age (Years)"
            className="w-[300px] h-8 px-2 border-2 rounded-2xl border-sky-300"
          />
        </div>
        <div className="py-2">
          <button
            type="submit"
            className="w-[300px] h-8 text-gray-100 bg-sky-300 rounded-2xl hover:bg-slate-600"
          >
            ADD USER
          </button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
