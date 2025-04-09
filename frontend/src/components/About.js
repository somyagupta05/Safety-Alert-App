import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      alert("Please log in first!");
      navigate("/");
    }
  };

  return (
    <div className="about-container">
      <h1 className="about-heading">About Safety Alert App</h1>
      <p className="about-text">
        The Safety Alert App provides emergency alerts with real-time location sharing.
      </p>

      <h2 className="features-heading">Key Features</h2>
      <ul className="features-list">
        <li>✔ One-tap emergency alerts</li>
        <li>✔ Real-time location sharing</li>
        <li>✔ Secure user authentication</li>
        <li>✔ Fast and reliable backend</li>
      </ul>

      <button className="dashboard-btn" onClick={handleDashboard}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default About;
