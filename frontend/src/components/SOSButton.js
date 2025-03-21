import React, { useState } from "react";

const SOSButton = ({ phoneNumber }) => {
  const [loading, setLoading] = useState(false);

  const sendAlert = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(`http://localhost:5000/api/alert/send-alert/${phoneNumber}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ latitude, longitude }),
          });

          const data = await response.json();
          alert(data.message);
        } catch (error) {
          alert("Failed to send alert. Try again!");
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        alert("Error getting location: " + error.message);
        setLoading(false);
      }
    );
  };

  return (
    <button onClick={sendAlert} disabled={loading} style={{ padding: "10px 20px", fontSize: "16px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
      {loading ? "Sending..." : "🚨 SOS Alert"}
    </button>
  );
};

export default SOSButton;
