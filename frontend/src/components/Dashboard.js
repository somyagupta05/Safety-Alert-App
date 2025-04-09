import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // show loading until fetch completes

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("No token found. Redirecting to login...");
        navigate("/"); // redirects to login
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        localStorage.removeItem("token"); // clear invalid token
        navigate("/"); // redirect on error
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/dashboard");
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

      if (!response.ok) throw new Error("Alert failed");

      alert("🚨 Emergency Alert Sent Successfully!");
    } catch (error) {
      console.error("Alert Error:", error);
      alert("❌ Failed to send emergency alert.");
    }
  };

  if (loading) return <h2>Loading your dashboard...</h2>;

  if (!user) return <h2>Could not load your data. Please login again.</h2>;

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name || "User"} 👋</h2>
      <p>Email: {user.email}</p>

      <h3>📱 Your Emergency Contacts:</h3>
      <ul>
        {user.emergencyContacts?.length > 0 ? (
          user.emergencyContacts.map((contact, idx) => (
            <li key={idx}>{contact}</li>
          ))
        ) : (
          <li>No emergency contacts added.</li>
        )}
      </ul>

      <button onClick={sendEmergencyAlert}>🚨 Send Emergency Alert</button>
      <button onClick={handleLogout}>Logout</button>

      {/* Extra: Safety Education Section */}
      <div className="safety-section">
        <h3>🛡️ Self-Defense Tips</h3>
        <ul>
          <li>👊 Learn basic moves like palm strikes and knee kicks.</li>
          <li>📣 Use your voice — shout for help loud and clear.</li>
          <li>💡 Stay in well-lit areas when alone at night.</li>
          <li>👟 Wear comfortable shoes when you're outside alone.</li>
        </ul>

        <h3>🎒 Must-Have Safety Items</h3>
        <ul>
          <li>🧴 Pepper spray (if legal in your area)</li>
          <li>🔋 Fully charged phone & power bank</li>
          <li>🆘 Emergency contact card in wallet</li>
          <li>💳 Some cash for emergencies</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
