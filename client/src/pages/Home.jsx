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
    <div>
      <h2 className="title">Harvard Students</h2>
      <table>
        <thead>
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
