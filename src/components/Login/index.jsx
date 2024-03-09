import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/images/bonlogo.png";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://pizza-delivery-app-be.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ maxWidth: "400px", width: "90%" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="logo" style={{ width: "100%", maxWidth: "200px" }} />
        </div>
        <form style={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)" }} onSubmit={handleSubmit}>
          <h1 style={{ margin: "0 0 20px 0" }}>Login to Your Account</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
          <button type="submit" style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>Sign In</button>
        </form>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>New Here ?</h2>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button type="button" style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#fff", color: "#333", border: "1px solid #ccc", cursor: "pointer" }}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
