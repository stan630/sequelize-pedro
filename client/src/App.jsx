// import './App.css'
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Registration from "./pages/Registration";

function App() {
  return (
   <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/addstudent" element={<AddStudent />} />
         <Route path="/register" element={<Registration />} />
      </Routes>
   </>
   
   );
}

export default App;
