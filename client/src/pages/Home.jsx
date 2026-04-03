import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8088/student").then((response) => {
      setStudentData(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <h2 className="text-crimson text-2xl font-bold mb-4">Harvard Students</h2>
      <table className="table-auto">
        <thead className="bg-crimson text-gray-100">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Major</th>
            <th>Dorm</th>
          </tr>
        </thead>

        {studentData.map((student, key) => {
          return (
            <tbody>
              <tr key={key}>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.email}</td>
                <td>{student.major}</td>
                <td>{student.dorm}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Home;
