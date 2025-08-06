import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../service/EmployeeService";
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

  function updateEmp(id) {
    navigator(`/edit-employee/${id}`);
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
                    className="btn btn-info"
                    onClick={() => updateEmp(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
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
