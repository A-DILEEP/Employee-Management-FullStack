import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../../service/EmployeeService";
import { getAllDepartments } from "../../service/DepartmentService";

import "./Employee.css";

const EmployeeComponent = () => {
  const navigator = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);
  const { id } = useParams();

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
  });

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    // ✅ send department object (backend expects this format)
    const employee = {
      firstName,
      lastName,
      email,
      department: { id: departmentId },
    };

    if (validateForm()) {
      if (id) {
        updateEmployee(id, employee)
          .then(() => navigator("/employee"))
          .catch((e) => console.log(e));
      } else {
        createEmployee(employee)
          .then(() => navigator("/employee"))
          .catch((e) => console.log(e));
      }
    }
  }

  useEffect(() => {
    getAllDepartments()
      .then((res) => setDepartments(res.data))
      .catch((err) => console.log(err));

    if (id) {
      getEmployee(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
          setDepartmentId(res.data.department?.id || "");
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  function validateForm() {
    let valid = true;
    const errorCopy = { ...error };

    errorCopy.firstName = firstName.trim() ? "" : "First Name is Required";
    errorCopy.lastName = lastName.trim() ? "" : "Last Name is Required";
    errorCopy.email = email.trim() ? "" : "Email ID is Required";
    errorCopy.departmentId = departmentId ? "" : "Department is Required";

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !departmentId
    ) {
      valid = false;
    }

    setError(errorCopy);
    return valid;
  }

  function pageTitle() {
    return (
      <h2 className="form-title">{id ? "Update Employee" : "Add Employee"}</h2>
    );
  }

  return (
    <div className="employee-form-container">
      <div className="employee-form-card">
        {pageTitle()}
        <form>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              placeholder="Enter Employee First name"
              value={firstName}
              className={error.firstName ? "input-error" : ""}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {error.firstName && (
              <span className="error-message">{error.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Enter Employee Last name"
              value={lastName}
              className={error.lastName ? "input-error" : ""}
              onChange={(e) => setLastName(e.target.value)}
            />
            {error.lastName && (
              <span className="error-message">{error.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email Id:</label>
            <input
              type="email"
              placeholder="Enter Employee Email id"
              value={email}
              className={error.email ? "input-error" : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && (
              <span className="error-message">{error.email}</span>
            )}
          </div>

          {/* ✅ Department dropdown */}
          <div className="form-group">
            <label>Department:</label>
            <select
              value={departmentId}
              className={error.departmentId ? "input-error" : ""}
              onChange={(e) => setDepartmentId(e.target.value)}
            >
              <option value="">-- Select Department --</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            {error.departmentId && (
              <span className="error-message">{error.departmentId}</span>
            )}
          </div>
        </form>

        <div className="form-buttons">
          <button
            className="btn btn-home"
            onClick={() => navigator("/employee")}
          >
            Home
          </button>
          <button className="btn btn-save" onClick={saveOrUpdateEmployee}>
            Save Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
