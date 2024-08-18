import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {   
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      const data = response.data;
      login(data.token);

      const decodedToken = jwtDecode(data.token);
      switch (decodedToken.role) {
        case "admin":
          navigate("/admin");
          break;
        case "guest":
        case "user":
          navigate("/");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
