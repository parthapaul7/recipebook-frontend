import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipies from "./pages/Recipies";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import NotLogged from "./pages/NotLogged";
import _404 from "./pages/_404";


import "./App.css";


function App() {
  const isLogin = localStorage.getItem("token") ? true : false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/notlogged" element={<NotLogged/>} />
        <Route path="/" element={isLogin?<Search />:<Navigate to="/login"/>}/>
        <Route exact path="/create" element={isLogin?<Create />:<Navigate to="/notlogged"/>}/>
        <Route exact path="/recipes" element={isLogin?<Recipies />:<Navigate to="/notlogged"/>}/>
        <Route path="*" element={<_404/>} />
      </Routes>
    </Router>
  );
}

export default App;
