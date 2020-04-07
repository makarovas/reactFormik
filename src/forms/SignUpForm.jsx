import React from "react";
import DropList from "./DropList";

import { withFormik } from "formik";

const formikWrapper = withFormik({
  mapPropsToValues: () => ({
    username: "",
    email: "",
    topics: [],
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map((x) => x.value),
    };
    setTimeout(() => {
      console.log(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 2000);
  },
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
  handleSubmit,
  handleReset,
  isSubmitting,
  dirty,
}) {
  return (
    <form className="p-5" onSubmit={handleSubmit}>
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
        <button
          className="btn btn-secondary mr-3"
          type="submit"
          disabled={!dirty || isSubmitting}
          onClick={handleReset}
        >
          reset
        </button>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          submit
        </button>
      </div>
    </form>
  );
}

const EnhancedForm = formikWrapper(SignUpForm);

export default EnhancedForm;
