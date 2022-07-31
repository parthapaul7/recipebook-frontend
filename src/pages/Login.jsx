import React from 'react'
import LogIn from '../components/Login'
import axios from 'axios'

const url = import.meta.env.VITE_API_URL;

const Login = () => {

  // const [details, setDetails] = useState({});

  async function login(data){
    try {
      const response = await axios.post(url+'users/login', data);
      if(response.status === 200){
        localStorage.setItem("token", JSON.stringify(response.data[0]));
        window.location.href = "/";
        return response.data;
      }
    } catch (error) {
      alert("Invalid Credentials") 
      return error;
    }
  }

  
  return (
    <LogIn login={login}/>
  )
}

export default Login