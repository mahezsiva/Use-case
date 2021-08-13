import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const Public = () => {
  return axios.get(API_URL + "all");
};
const Admin = () => {
  return axios.get(API_URL + "Admin", { headers: authHeader() });
};
const User = () => {
    return axios.get(API_URL + "UserLogin", { headers: authHeader() });
  };
  

export default {
 
};