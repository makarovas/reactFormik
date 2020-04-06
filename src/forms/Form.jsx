import React from "react";
import { Formik } from "formik";

export default function SimpleForm() {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => {
        console.log(values);
        return values;
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            placeholder="Enter the name"
            name="name"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}
