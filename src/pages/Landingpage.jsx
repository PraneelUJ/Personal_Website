import React from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";
import { Button, Alert } from "react-bootstrap";

export default function Landingpage() {
  return (
    <>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "cursive",
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
          fontFamily: "cursive",
          textAlign: "center",
          marginTop: "200px",
          background: "linear-gradient(90deg, #ffea00, #00ff87)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "shine 4s linear infinite, fadeIn 2s ease-in-out forwards",
          opacity: 0,
        }}>
        <Button>Clickme</Button> <Button>Clickme</Button>
      </div>
      
    </>
  );
}
