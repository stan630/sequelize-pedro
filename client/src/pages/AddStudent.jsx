import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'


const initialValues = {
  fname: "",
  lname: "",
  email: "",
  major: "",
  dorm: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  fname: Yup.string().required('Required').min(3, 'Name must be at least 3 characters'),
  lname: Yup.string().required('Required').min(43, 'Name must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  major: Yup.string().required('Required'),
  dorm: Yup.string().required('Required')
})

function AddStudent() {

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
          autocomplete="off"
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
            autocomplete="off"
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
            autocomplete="off"
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
            autocomplete="off"
          />
          <ErrorMessage name='major' />
        </div>

        <label htmlFor="select" className="flex mb-1 font-bold">
          Dorm
        </label>
        <Field as="select"
          className="block w-50 mb-4 border rounded-md py-1.5 pr-3 pl-1 text-base text-gray-900"
          id="dorm"
          name="dorm"
        >
          <option value="adams">Adams</option>
          <option value="quincy">Quincy</option>
          <option value="longfellow">Longfellow</option>
          <option value="lowell">Lowell</option>
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
