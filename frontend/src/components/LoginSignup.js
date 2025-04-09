import React, { useState } from "react";
import axios from "axios";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    emergencyContacts: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignup
        ? "http://localhost:5000/api/signup"
        : "http://localhost:5000/api/login";
      const data = isSignup
        ? {
            ...formData,
            emergencyContacts: formData.emergencyContacts.split(","),
          }
        : { phoneNumber: formData.phoneNumber };

      const response = await axios.post(url, data);
      localStorage.setItem(
        "user",
        JSON.stringify({ phoneNumber: formData.phoneNumber })
      );

      alert(response.data.message);
      window.location.href = "/about";
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.projectTitle}>Safety Alert App</h1>
      </div>

      <div style={styles.card}>
        <img src="/phone-1.png" alt="Siren Icon" style={styles.icon} />
        <h2 style={styles.title}>
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          )}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={styles.input}
          />
          {isSignup && (
            <input
              type="text"
              name="emergencyContacts"
              placeholder="Emergency Contacts (comma-separated)"
              value={formData.emergencyContacts}
              onChange={handleChange}
              required
              style={styles.input}
            />
          )}
          <button type="submit" style={styles.button}>
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <p onClick={() => setIsSignup(!isSignup)} style={styles.toggle}>
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Signup"}
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
   background: "linear-gradient(to right,rgb(136, 35, 37),rgb(165, 82, 0))",
  // background:"#7A0C02",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  },
  header: {
    marginBottom: "20px",
  },
  projectTitle: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  icon: {
    width: "60px",
    marginBottom: "16px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#d80027",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    background: "#d80027",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  toggle: {
    marginTop: "15px",
    color: "#d80027",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default LoginSignup;
