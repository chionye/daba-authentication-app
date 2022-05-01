import axios from "axios";

const API_URL = "http://localhost:5667/api/v1/users/";
const AuthService = {
  login: (email, password) =>{
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  },
  logout: ()=>{
    localStorage.removeItem("user");
  },
  register: (first_name, lastname, email, password) => {
    return axios.post(API_URL, {
      first_name,
      lastname,
      email,
      password
    });
  },
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default AuthService;