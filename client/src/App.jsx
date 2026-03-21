import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [studentData,setStudentData] = useState([])
  
   useEffect(()=>{
   axios.get("http://localhost:8088/student").then((response)=>{
      setStudentData(response.data)
   })
  }, [])

  return (
    <div className='App'> 
      {studentData.map((student,key) => {
         return (
            <div className='studentInfo'>
               <div>{student.fname}</div>
               <div>{student.lname}</div>
               <div>{student.email}</div>
               <div>{student.major}</div>
               <div>{student.dorm}</div>
               
            </div>
         )
      })}
      </div>
    
   )
}

export default App
