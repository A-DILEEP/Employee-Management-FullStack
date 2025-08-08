# 🧑‍💼 Employee Management FullStack Website

This is a full-stack **Employee Management System** built using:

- **React.js** for frontend (Vite)
- **Spring Boot** for backend (RESTful API)
- **PostgreSQL** for the database (Neon.tech)
- **Deployed** on:
  - Netlify (Frontend)
  - Render (Backend)

---

## 🌐 Live Demo

- 🔗 Frontend: [https://vermillion-druid-a49153.netlify.app](https://vermillion-druid-a49153.netlify.app)
- 🔗 Backend API: [https://employeemanagement-backend-cvwx.onrender.com/employee](https://employeemanagement-backend-cvwx.onrender.com/employee)

---

## 📸 Features

- ✅ Add a new employee
- ✅ View all employees
- ✅ Update employee information
- ✅ Delete an employee
- ✅ Clean UI with responsive design

---

## 📁 Project Structure

📦 employee-management-fullstack<br>
***├── backend (Spring Boot App)***<br>
│ ├── src/main/java/com/emp/Management<br>
│ ├── controller/<br>
│ ├── service/<br>
│ ├── dto/<br>
│ ├── entity/<br>
│ └── repository/<br>
│
***├── frontend (React + Vite App)***<br>
│ ├── src/<br>
│ │ ├── components/<br>
│ │ ├── services/<br>
│ │ ├── pages/<br>
│ └── .env (VITE_API_BASE_URL)<br>

## ⚙️ Backend Setup (Spring Boot)

### Prerequisites
- Java 17 or 21
- Maven
- PostgreSQL

### Steps to Run

```bash
cd ems-backend
mvnw install 
./mvnw spring-boot:run
```

## ⚙️ FrontEnd Setup (React + Vite App)

### Prerequisites
- Node.js
- npm or yarn
  
### Steps to Run

```bash
cd ems-frontend
npm install
npm run dev
```
