import ListEmpCo from "./components/ListEmployeeComponent.jsx";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmpCo />}></Route>
          <Route path="/employee" element={<ListEmpCo />}></Route>
          <Route path="/add-employee" element={<CreateEmployee />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}
export default App;
