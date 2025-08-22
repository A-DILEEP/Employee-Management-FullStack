import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./ListEmployee.css";

function ListEmployeeComponent() {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((Response) => {
        console.log("API raw response:", Response);
        setEmployee(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmp(id) {
    navigator(`/edit-employee/${id}`);
  }
  function detailInfo(id) {
    navigator(`/employee/${id}`);
  }

  function deleteEmp(id) {
    deleteEmployee(id)
      .then(() => {
        window.location.reload();
        console.log("Deleted employee with id:" + id);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <h2 className="title">List of Employees</h2>
      <button className="btn primary" onClick={addNewEmployee}>
        Add Employee
      </button>
      <div>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button
                    className="btn details"
                    onClick={() => detailInfo(employee.id)}
                  >
                    Details
                  </button>
                  <button
                    className="btn info"
                    onClick={() => updateEmp(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn danger"
                    onClick={() => deleteEmp(employee.id)}
                  >
                    Delete
                  </button>
                </td>
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
