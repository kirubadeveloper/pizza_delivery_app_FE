import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/bonlogo2.png";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://pizza-delivery-app-be.onrender.com/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
      <div style={{ maxWidth: "400px", width: "90%", display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="logo" style={{ width: "100%", maxWidth: "200px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ margin: "0", fontSize: "24px" }}>Welcome Back</h1>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button type="button" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#fff", color: "#333", border: "1px solid #ccc", cursor: "pointer" }}>Sign in</button>
          </Link>
        </div>
        <form style={{ backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px", boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)" }} onSubmit={handleSubmit}>
          <h1 style={{ margin: "0 0 20px 0", textAlign: "center" }}>Create Account</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
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
          <button type="submit" style={{ width: "100%", padding: "10px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
