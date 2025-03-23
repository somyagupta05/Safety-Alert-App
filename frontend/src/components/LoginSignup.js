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
      const url = isSignup ? "http://localhost:5000/api/signup" : "http://localhost:5000/api/login";
      const data = isSignup
        ? { ...formData, emergencyContacts: formData.emergencyContacts.split(",") }
        : { phoneNumber: formData.phoneNumber };
  
      const response = await axios.post(url, data);
  
      // Save user details in localStorage
      localStorage.setItem("user", JSON.stringify({ phoneNumber: formData.phoneNumber }));
  
      alert(response.data.message);
      window.location.href = "/about"; // Redirect to dashboard
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  

  return (
    <div style={styles.container}>
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {isSignup && (
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        )}
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        {isSignup && (
          <input type="text" name="emergencyContacts" placeholder="Emergency Contacts (comma-separated)" value={formData.emergencyContacts} onChange={handleChange} required />
        )}
        <button type="submit">{isSignup ? "Signup" : "Login"}</button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)} style={styles.toggle}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
      </p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: "auto" },
  toggle: { color: "blue", cursor: "pointer", marginTop: "10px" }
};

export default LoginSignup;
