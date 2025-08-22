import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent.jsx";
import FooterComponent from "./components/Footer/FooterComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListEmpCo from "./components/ListEmployee/ListEmployeeComponent.jsx";
import EmpCompo from "./components/Employee/EmployeeComponent.jsx";
import DetailEmployee from "./components/DetailEmp/DetailEmployee.jsx";
function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <HeaderComponent />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ListEmpCo />} />
            <Route path="/employee" element={<ListEmpCo />} />
            <Route path="/employee/:id" element={<DetailEmployee/>} />
            <Route path="/add-employee" element={<EmpCompo />} />
            <Route path="/edit-employee/:id" element={<EmpCompo />} />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
