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
    <div className="form-wrap">
      <h1>New Form</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div>
            <input
              placeholder="First name"
              name="firstName"
              className="form-control form-input"
              onChange={event => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Last name"
              name="lastName"
              className="form-control form-input"
              onChange={event => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary form-btn"
            onClick={onSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
