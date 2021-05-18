import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTasks(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  const onChange = (e) => {
    localStorage.setItem("myValueInLocalStorage", e.target.value);

    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label className="label__lg" htmlFor="new-todo-input">
          What should be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button className="btn btn__lg" onChange={onChange}>
        Add
      </button>
    </form>
  );
}
