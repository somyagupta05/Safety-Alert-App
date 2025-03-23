import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token"); // Get token from local storage
      if (!token) {
        navigate("/"); // Redirect to login if no token
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Send token for authentication
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data); // Store user data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/"); // Redirect to login on failure
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/"); // Redirect to login
  };

  const sendEmergencyAlert = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/alert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ message: "Emergency Alert!" }),
      });

      if (!response.ok) {
        throw new Error("Failed to send alert");
      }

      alert("🚨 Emergency Alert Sent Successfully!");
    } catch (error) {
      console.error("Error sending alert:", error);
      alert("Failed to send emergency alert!");
    }
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <h3>Emergency Contacts:</h3>
      <ul>
        {user.emergencyContacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
      <button onClick={sendEmergencyAlert}>🚨 Send Emergency Alert</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
