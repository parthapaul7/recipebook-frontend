import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipies from "./pages/Recipies";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";

import "./App.css";

function App() {
  return <Router >
    <Navbar/>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/" element={<Search/>}/>
      <Route exact path="/recipes" element={<Recipies/>}/>
      <Route exact path="/create" element={<Create/>}/>
    </Routes>
  </Router>;
}

export default App;
