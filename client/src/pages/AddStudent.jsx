import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async(values, actions) => {
   console.log(values)
   console.log(actions)
   await new Promise((resolve)=>{
      setTimeout(resolve, 1000)
      actions.resetForm()
   })
}

function AddStudent() {
  const {values,errors, handleBlur,isSubmitting, handleChange, handleSubmit} = useFormik({
   initialValues: {
      fname: "",
      lname: "",
      email: "",
      major: "",
      dorm: ""
   },
   validationSchema:basicSchema,
   onSubmit,
  })
  console.log(errors)
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-7">
          <div className="mb-5">
            <label htmlFor="fname">First Name</label>
            <input className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-xs px-3 shadow-xs placeholder:text-body {errors.fname && touched.fname ? 'input-error' : ''}"
            value={values.fname} type="text" id="fname"
            onBlur={handleBlur}
            onChange={handleChange}
            />
            {errors.fname && <p className="error">{errors.fname}</p>}
          </div>
          <div className="mb-5">
            <label htmlFor="lname">Last Name</label>
            <input className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-xs px-3 shadow-xs placeholder:text-body {errors.lname && touched.lname ? 'input-error' : ''}" type="text" id="lname" value={values.lname}
            onBlur={handleBlur}
            onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email">Email</label>
            <input className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-xs px-3 shadow-xs placeholder:text-body {errors.email && touched.email ? 'input-error' : ''} " type="email" id="email" value={values.email}
            onBlur={handleBlur}  
            onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="major">Major</label>
            <input className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-xs px-3 shadow-xs placeholder:text-body {errors.major && touched.major ? 'input-error' : ''}" type="major" id="major" value={values.major}
            onChange={handleChange}
            
            />
          </div>
          <div className="mb-5">
            <label htmlFor="dorm">Dorm</label>
            <input className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-xs px-3 shadow-xs placeholder:text-body {errors.dorm && touched.dorm ? 'input-error' : ''}" type="text" id="dorm" value={values.dorm}
            onChange={handleChange}
            
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-blue-500 px-2 disabled:bg-gray-500 py-2 rounded"
          >
            Submit
          </button>
      </form>
    </div>
  );
}

export default AddStudent;
