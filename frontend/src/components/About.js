import React from "react";
import axios from "axios";

const EmergencyAlertButton = () => {
  const handleAlert = async () => {
    try {
      // Retrieve phone number from logged-in user
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.phoneNumber) {
        alert("Please login first");
        return;
      }

      // Get current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Send alert request to backend
          const res = await axios.post(`http://localhost:5000/api/send-alert/${user.phoneNumber}`, {
            latitude,
            longitude,
          });

          alert(res.data.message);
        },
        (err) => {
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
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default EmergencyAlertButton;
