import React from "react";
import { Formik, ErrorMessage } from "formik";

export default function SimpleForm() {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values.name);
        }, 1200);
      }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Please enter your name";
        }
        return errors;
      }}
      render={({
        handleSubmit,
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            placeholder="Enter the name"
            name="name"
            onBlur={handleBlur}
          />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
          <ErrorMessage name="name" />
        </form>
      )}
    />
  );
}
