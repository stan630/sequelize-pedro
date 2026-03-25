import React from 'react'
import { useForm } from 'react-hook-form'

function AddStudent() {
  const {
   register,
   handleSubmit }
    = useForm()

  const onSubmit = (data => console.log(data))

   
   return (
    <div className='createAddStudentPage'>
      
      <form className="formContainer" onSubmit={handleSubmit((data)=>{
         console.log(data)
      })}>
         <input 
            {...register("fname", {required:true})} placeholder="First Name" />
         <input 
            {...register("lname", {required:true,minLength:3})} placeholder="Last Name" />
         <input {...register("email",{required:true})} placeholder="Email" />
         <input {...register("major")} placeholder="Major" />
         <input {...register("fname")} placeholder="Dorm" />
         <input type='submit' />
      </form>
    </div>
  )
}

export default AddStudent