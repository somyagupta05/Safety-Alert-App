import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <h1>Safety Alert App</h1>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
