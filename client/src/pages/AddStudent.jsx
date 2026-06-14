import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from "axios";

 

function AddStudent() {
  const initialValues = {
  fname: "",
  lname: "",
  email: "",
  major: "",
  dorm: "",
};

const validationSchema = Yup.object({
  fname: Yup.string().required('Required').min(3, 'Name must be at least 3 characters'),
  lname: Yup.string().required('Required').min(3, 'Name must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  major: Yup.string().required('Required'),
  dorm: Yup.string().required('Required')
})
    
  const onSubmit = (data) => {
  axios.post("http://localhost:8088/student", data).then((response) => {
      console.log("It Worked!")
    });
    
};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      className="flex h-screen mt-8 justify-center"
    >
      <Form
        className="w-full max-w-md bg-white p-8"
      >
        <div className="mb-5">
          <label htmlFor="fname" className="flex mb-1 font-bold">
            First Name
          </label>
          <Field
          autoComplete="off"
            className="block min-w-0 grow-0 mb-1 border rounded-md py-1.5 pr-3 pl-1 text-base text-gray-900"
            type="text"
            id="fname"
            name="fname"
          />
          <ErrorMessage name='fname' />
        </div>

        <div className="mb-5">
          <label htmlFor="lname" className="flex mb-1 font-bold">
            Last Name
          </label>
          <Field
            autoComplete="off"
            type="text"
            name="lname"
            id="lname"
            className="block min-w-0 grow-0 mb-1 border rounded-md py-1.5 pr-3 pl-1 text-base text-gray-900"
          />
          <ErrorMessage name='lname' />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="flex mb-1 font-bold">
            Email
          </label>
          <Field
            className="block min-w-0 grow-0 mb-1  border rounded-md py-1.5 pr-3 pl-1 text-base text-gray-900"
            autoComplete="off"
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" />
        </div>

        <div className="mb-5">
          <label htmlFor="major" className="flex mb-1 font-bold">
            Major
          </label>
          <Field
            className="block min-w-0 grow-0 mb-1 border rounded-md py-1.5 pr-3 pl-1 text-base text-gray-900"
            type="text"
            id="major"
            name="major"
            autoComplete="off"
          />
          <ErrorMessage name='major' />
        </div>

        <label htmlFor="dorm" className="flex mb-1 font-bold">
          Dorm
        </label>
        <Field as="select"
          className="block w-50 mb-4 border rounded-md py-1.5 pr-3 pl-1 text-base text-gray-900"
          id="dorm"
          name="dorm"
        >
          <option value="Adams">Adams</option>
          <option value="Quincy">Quincy</option>
          <option value="Longfellow">Longfellow</option>
          <option value="Lowell">Lowell</option>
          <option value="winthrop">Winthrop</option>
        </Field>
        <ErrorMessage name="dorm" />

        <button type="submit" className="border rounded-md px-2">
          Submit
        </button>

      </Form>
    </Formik>
  );
}

export default AddStudent;
