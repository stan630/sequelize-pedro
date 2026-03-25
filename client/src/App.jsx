import './App.css'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'

function App() {
  
   return (
    <div className='App'>
      <Router>
         <Link to="/">Home Page</Link>
         <Link to="/addstudent"> Add a Student</Link>
         <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/addstudent" element={<AddStudent />} />
         </Routes>
      </Router>
    </div>
   )
}

export default App
