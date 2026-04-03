import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center bg-slate-700 text-slate-100 p-4 gap-4'>
      <Link to='/' className='text-4xl font-serif'>Harvard</Link>
      <ul className='flex list-none gap-3'>
         <li className='active:bg-slate-400 hover:bg-slate-500 p-0.5 '>
            <Link to="/addstudent">Add Student</Link>
         </li>
         <li
            className='active:hover:bg-slate-400  hover:bg-slate-500 p-0.5'>
            <Link to="/register">Registration</Link>
         </li>
      </ul>
    </nav>
  )
}

export default Navbar