import React from "react";
import axios from "axios";

const EmergencyAlertButton = () => {
  const handleAlert = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.phoneNumber) {
        alert("Please login first");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const res = await axios.post(`http://localhost:5000/api/send-alert/${user.phoneNumber}`, {
            latitude,
            longitude,
          });

          alert(res.data.message);
        },
        () => {
          alert("Location access denied. Please enable location sharing.");
        }
      );
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send emergency alert");
    }
  };

  return (
    <button onClick={handleAlert} style={styles.alertButton}>
      🚨 Send Emergency Alert
    </button>
  );
};

const styles = {
  alertButton: {
    padding: "14px 24px",
    marginTop:"60px",
    backgroundColor: "white",
    color: "#7C0A02",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s",
  },
};

export default EmergencyAlertButton;
