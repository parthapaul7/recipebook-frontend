import React from "react";
import SignUp from "../components/SignUp";
import axios from "axios";
const url = import.meta.env.VITE_API_URL;

const Signup = () => {
  async function signup(data) {
    try {
      const response = await axios.post(url + "users/signup", data);
        localStorage.setItem("token", JSON.stringify(response?.data[0] || "token"));
        window.location.href = "/";
        return response.data;
    } catch (error) {
      alert("Invalid Credentials");
      console.log(error)
      return error;
    }
  }
  return <SignUp signup={signup} />;
};

export default Signup;
