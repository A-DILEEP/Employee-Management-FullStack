import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../service/EmployeeService";

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
    console.log(employee);
    if (validateForm()) {
      if (id) {
        updateEmployee(id, employee)
          .then((Response) => {
            console.log(Response.data);
            navigator("/employee");
          })
          .catch((e) => console.log(e));
      } else {
        createEmployee(employee)
          .then((Response) => {
            console.log(Response.data);
            navigator("/employee");
          })
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
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id]);

  function validateForm() {
    let valid = true;
    const errorCopy = { ...error };
    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First Name is Required";
      valid = false;
    }
    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last Name is Required";
      valid = false;
    }
    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email id is Required";
      valid = false;
    }

    setError(errorCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container mt-5 p-2 d-flex flex-column ">
      <div className="row justify-content-center">
        <div className="card p-4 w-50">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label fw-bold">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter Employee First name"
                  name="firstname"
                  value={firstName}
                  className={`form-control ${
                    error.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && (
                  <div className="invalid-feedback">{error.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label fw-bold">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    error.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && (
                  <div className="invalid-feedback">{error.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label fw-bold">Email Id:</label>
                <input
                  type="email"
                  placeholder="Enter Employee Email id"
                  name="email"
                  value={email}
                  className={`form-control ${error.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && (
                  <div className="invalid-feedback">{error.email}</div>
                )}
              </div>
            </form>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <button
                className="btn btn-primary w-50"
                onClick={() => navigator("/employee")}
              >
                Home
              </button>
              <button
                className="btn btn-success w-50"
                onClick={saveOrUpdateEmployee}
              >
                Save Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
