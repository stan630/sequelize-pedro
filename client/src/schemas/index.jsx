import * as yup from 'yup'

export const basicSchema = yup.object().shape({
   email: yup.string().email("Please enter a valid email address.").required("Required"),
   fname: yup.string().min(4).required("Required"),
   lname: yup.string().min(4).required("Required"),
   major: yup.string().required("Required"),
})

