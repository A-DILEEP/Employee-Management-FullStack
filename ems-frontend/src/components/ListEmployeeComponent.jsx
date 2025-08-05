import React, { useEffect, useState } from "react";
import { listEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
function ListEmployeeComponent() {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    listEmployees()
      .then((Response) => {
        setEmployee(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addNewEmployee() {
    navigator("/add-employee");
  }
  return (
    <div className="container">
      <h2 className="text-center mt-5">List of Employees</h2>
      <button className="btn btn-primary mb-2 mt-5" onClick={addNewEmployee}>
        Add Employee
      </button>
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Employee id</th>
              <th>Employee FirstName</th>
              <th>Employee LastName</th>
              <th>Employee Email</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
