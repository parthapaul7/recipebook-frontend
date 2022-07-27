import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recipies from "./pages/Recipies";

import "./App.css";

function App() {
  return <Router >
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/" element={<Recipies/>}/>
    </Routes>
  </Router>;
}

export default App;
