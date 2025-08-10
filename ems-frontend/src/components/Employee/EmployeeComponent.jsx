import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../../service/EmployeeService";
import "./Employee.css";


const EmployeeComponent = () => {
  const navigator = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };

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
    if (id) {
      getEmployee(id)
        .then((Response) => {
          setFirstName(Response.data.firstName);
          setLastName(Response.data.lastName);
          setEmail(Response.data.email);
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

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
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
