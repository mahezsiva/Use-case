import axios from "axios";


//export default function AuthService() {
const API_URL = "http://localhost:8080/api/auth/";

// aadhar, age, email, firstname, lastname, pan, password, phonenumber, username
const register = (aadhar, age, email, firstname, lastname, pan, password, phonenumber, username) => {
  return axios.post(API_URL + "signup", {
    aadhar, age, email, firstname, lastname, pan, password, phonenumber, username
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};




const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export {
  login,
  logout,
  register,
  getCurrentUser
}
//}