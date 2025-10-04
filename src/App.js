import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { Button, Alert } from "react-bootstrap";
import { useState } from "react";
import LandingPage from "./pages/Landingpage.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Projects from "./pages/Projects.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";
import Extra from "./pages/Extra.jsx";
// Example LandingPage component

// Component that uses useNavigate + Routes + Link
function AppRouter() {
  const navigate = useNavigate();
  function MouseOver(event) {
    event.target.style.background = "yellow";
  }
  function MouseOut(event) {
    event.target.style.background = "";
  }
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "blueviolet",
            fontFamily: "cursive",
            fontSize: 50,
            marginLeft: "20px",
          }}
        >
          Praneel
        </Link>
        <div>
          <Link
            to="/aboutme"
            style={{
              color: "blueviolet",
              fontFamily: "cursive",
              fontSize: 30,
              textAlign: "right",
              marginRight: "200px",
            }}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            About Me{" "}
          </Link>
          <Link
            to="/projects"
            style={{ color: "blueviolet", fontFamily: "cursive", fontSize: 30 }}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            Projects
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurricular" element={<Extra />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>
    </div>
  );
}

// Main App wrapped with Router
export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
