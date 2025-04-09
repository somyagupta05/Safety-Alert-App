import React from "react";
import axios from "axios";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const sendEmergencyAlert = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await axios.post(`http://localhost:5000/api/send-alert/${user.phoneNumber}`, {
            latitude,
            longitude,
          });

          alert(response.data.message || "Alert sent!");
        } catch (error) {
          alert(error.response?.data?.message || "Failed to send alert");
        }
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Welcome, {user.name}!</h1>
      <p>Your phone number: {user.phoneNumber}</p>
      <button onClick={sendEmergencyAlert} style={styles.button}>
        🚨 Send Emergency Alert
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "15px 25px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Dashboard;
