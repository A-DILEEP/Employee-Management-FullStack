import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate=useNavigate();
  const addEmp=()=>{
    navigate("/add-employee")
  }
    const viewAllEmp=()=>{
    navigate("/employee")
  }
    const addDept=()=>{
    navigate("/add-department")
  }
  const viewAllDept=()=>{
    navigate("/department");
  }
  return (
    <div className="home">
      <div className="card">
        <div className="ct">
          <div className="ctdiv">
            <button onClick={viewAllEmp}>View All Employees🗒️ </button>
          </div>
          <div className="ctdiv">
            <button onClick={addEmp}>Add Employee ➕🧑‍💼</button>
          </div>
        </div>
        <div className="cb">
          <div className="ctdiv">
            <button onClick={addDept}>Add Department</button>
          </div>
          <div className="ctdiv">
            <button  onClick={viewAllDept}>View All Departments</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
