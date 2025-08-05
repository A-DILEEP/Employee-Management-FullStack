import axios from "axios";

const API_BASE_URL = "http://localhost:8080/employee";

export const listEmployees = () => {
  return axios.get(API_BASE_URL);
};

export const createEmployee = (employee) => {
  return axios.post(API_BASE_URL, employee);
};
