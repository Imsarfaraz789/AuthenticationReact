import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/auth/AuthProvider";
import Navbar from "./component/pages/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Login from "./component/pages/Login";
import Profile from "./component/pages/Profile";
import Admin from "./component/pages/Admin";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
