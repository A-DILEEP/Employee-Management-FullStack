import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent.jsx";
import FooterComponent from "./components/Footer/FooterComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListEmpCo from "./components/ListEmployee/ListEmployeeComponent.jsx";
import EmpCompo from "./components/Employee/EmployeeComponent.jsx";
import DetailEmployee from "./components/DetailEmp/DetailEmployee.jsx";
import AddDepartmentComponent from "./components/Department/AddDepartmentComponent.jsx";
function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <HeaderComponent />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ListEmpCo />} />
            <Route path="/employee" element={<ListEmpCo />} />
            <Route path="/employee/:id" element={<DetailEmployee />} />
            <Route path="/add-employee" element={<EmpCompo />} />
            <Route path="/edit-employee/:id" element={<EmpCompo />} />
            <Route
              path="/add-department"
              element={<AddDepartmentComponent />}
            />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
