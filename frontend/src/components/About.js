import React from "react";
import "./About.css"; // Importing CSS for styling
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <h1 className="about-heading">About Safety Alert App</h1>
      <p className="about-text">
        The Safety Alert App is designed to provide instant emergency support
        when users are in danger. With just one tap, users can send their live
        location to emergency contacts and request immediate help.
      </p>
      <h2 className="features-heading">Features</h2>
      <ul className="features-list">
        <li>✔ One-click emergency alert</li>
        <li>✔ Live location tracking</li>
        <li>✔ Secure user authentication</li>
        <li>✔ Fast and reliable support</li>
      </ul>
      <button className="dashboard-btn" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default About;
