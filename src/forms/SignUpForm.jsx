import React from "react";

export default function SignUpForm() {
  return (
    <form className="p-5">
      <h1>Sign up</h1>
      <div className="form-group">
        <label>User name</label>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          className="form-control"
        />
      </div>
      <div className="pr-1">
        <button className="btn btn-secondary mr-3" type="submit">
          Reset
        </button>
        <button className="btn btn-primary" type="submit">
          Reset
        </button>
      </div>
    </form>
  );
}
