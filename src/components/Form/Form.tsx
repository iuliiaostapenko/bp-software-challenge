import React, { SyntheticEvent, useState } from "react";
import "./Form.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onSubmit(event: SyntheticEvent) {
    // kill form action
    event.preventDefault();
    console.log(`Hello ${firstName} ${lastName}`);
  }

  return (
    <div>
      <div>New Form</div>
      <form className="form clearfix" onSubmit={onSubmit}>
        <input
          placeholder="First name"
          name="firstName"
          className="form-control form-input"
          onChange={event => setFirstName(event.target.value)}
        />
        <input
          placeholder="Last name"
          name="lastName"
          className="form-control form-input"
          onChange={event => setLastName(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary form-btn"
          onClick={onSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
}
