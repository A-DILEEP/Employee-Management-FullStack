import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../../service/EmployeeService";
import "./DetailEmployee.css"
function DetailEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const { id } = useParams();
  const navigate=useNavigate();
  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((Response) => {
          setFirstName(Response.data.firstName);
          setLastName(Response.data.lastName);
          setEmail(Response.data.email);
          setDepartment(Response.data.department.name);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  const handle=()=>{
    navigate("/");
  }
  return (
    <div className="DetailsEmp">
      <div className="DetailsCard">
        <span className="te">
          <p>First Name : {firstName}</p>
        </span>
        <span className="te">
          <p>Last Name : {lastName}</p>
        </span>
        <span className="te">
          <p>Email : {email}</p>
        </span>
        <span className="te">
          <p>Department : {department}</p>
        </span>
      </div>
      <div className="navi">
        <button onClick={handle}>
          Home
        </button>
      </div>
    </div>
  );
}

export default DetailEmployee;
