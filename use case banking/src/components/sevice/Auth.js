import axios from "axios";


const API_URL = "http://localhost:8080/Transfer/add/";


const transfer = (email,toemail,amount,reason) => {
  return axios.post(API_URL + "signup", {
    amount, email, toemail,reason
  });
};

const Transfer = (email,toemail,amount) => {
  return axios
    .post(API_URL + "Transfer/add", {
      email,
      toemail,
      amount
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
  Transfer,
  logout,
  transfer,
  getCurrentUser
}
//}