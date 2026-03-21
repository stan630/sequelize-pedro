import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
   axios.get("http://localhost:8088/student").then((response)=>{
      console.log(response)
   })
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
