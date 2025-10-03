import React from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Landingpage() {
  function MouseOver(event) {
    event.target.style.background = "yellow";
    event.target.style.color = "black";
    event.target.style.fontWeight = "bold";
    event.target.style.fontFamily="Michroma";
    event.target.style.transform= "scale(1.2)";
    event.target.style.boxShadow= "0 8px 20px rgba(0, 255, 255, 0.8)";
  }
  function MouseOut(event) {
    event.target.style.background = "black";
    event.target.style.fontFamily="fascinate";
    event.target.style.color="white";
    event.target.style.transform= "scale(1)";
    event.target.style.boxShadow="none"  ;
  }
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "fascinate",
          textAlign: "center",
          marginTop: "200px",
          background: "linear-gradient(90deg, #ffea00, #00ff87)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "shine 4s linear infinite, fadeIn 2s ease-in-out forwards",
          opacity: 0,
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 45,
            strings: ["Hi, I am Praneel Joshi !!!"],
          }}
        />

        {/* Inline <style> for keyframes since we're not using CSS file */}
        <style>
          {`
          @keyframes shine {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
        </style>
      </div>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "Michroma",
          textAlign: "center",
          marginTop: "200px",
          background: "linear-gradient(90deg, #ffea00, #00ff87)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "shine 4s linear infinite, fadeIn 2s ease-in-out forwards",
          opacity: 0,
        }}
      >
        <Button
          style={{
            fontSize: "30px",
            margin: "30px",
            fontFamily: "fascinate",
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
            borderColor: "orange",
            borderWidth: "5px",
            transition:"transform 0.3s ease"
          }}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut} 
          onClick={() => navigate("/aboutme")}
        >
          Know Me
        </Button>
        <Button
          style={{
            fontSize: "30px",
            marginLeft: "30px",
            fontFamily: "fascinate",
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
            borderColor: "orange",
            borderWidth: "5px",
            transition:"transform 0.3s ease",
          }}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
          onClick={() => window.open("https://drive.google.com/file/d/1cpKdKQ2vFdHtaNPIVdfJSD7O9LIwB-XO/view?usp=sharing")}
        >
          My Resume
        </Button>
      </div>
    </>
  );
}
