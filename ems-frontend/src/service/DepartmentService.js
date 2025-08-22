import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL + "/departments";

export const getAllDepartments = () => {
  return axios.get(API_BASE_URL);
};

export const addDepartment = (department) => {
  return axios.post(API_BASE_URL, department);
};
