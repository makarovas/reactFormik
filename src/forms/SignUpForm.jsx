import React from "react";
import DropList from "./DropList";

import { withFormik } from "formik";

const formikWrapper = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    topics: [],
  }),
});

const options = [
  { value: "Art", label: "Art" },
  { value: "Sport", label: "Sport" },
  { value: "Tech", label: "Tech" },
];
function SignUpForm({
  values,
  handleChange,
  handleBlur,
  setFieldValue,
  setTouchedValue,
}) {
  return (
    <form className="p-5">
      <h1>Sign up</h1>
      <div className="form-group">
        <label>User name</label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          name="username"
          type="text"
          placeholder="Enter username"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          type="email"
          placeholder="Enter email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Fav topics</label>
        <DropList
          value={values.topics}
          onChange={setFieldValue}
          onBlue={setTouchedValue}
          options={options}
        />
      </div>
      <div className="pr-1">
        <button className="btn btn-secondary mr-3" type="submit">
          reset
        </button>
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </div>
    </form>
  );
}

const EnhancedForm = formikWrapper(SignUpForm);

export default EnhancedForm;
