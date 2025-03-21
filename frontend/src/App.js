import React from "react";
import SOSButton from "./components/SOSButton";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Emergency Alert System</h1>
      <SOSButton phoneNumber="+919301615905" />
    </div>
  );
}

export default App;
