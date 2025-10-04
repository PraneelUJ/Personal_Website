import React from "react";
import project2 from "./project2.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Project2() {
  function MouseOver(event) {
    event.target.style.transform = "scale(1.2)";
    event.target.style.boxShadow = "0 8px 20px #ADD8E6";
  }
  function MouseOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "none";
  }

  function MouseOver1(event) {
    event.target.style.background = "yellow";
    event.target.style.color = "black";
    event.target.style.fontWeight = "bold";
    event.target.style.fontFamily = "Michroma";
    event.target.style.transform = "scale(1.2)";
    event.target.style.boxShadow = "0 8px 20px rgba(0, 255, 255, 0.8)";
  }
  function MouseOut1(event) {
    event.target.style.background = "black";
    event.target.style.fontFamily = "fascinate";
    event.target.style.color = "white";
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "none";
  }
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        // alignItems:"center",
        // justifyContent:"space-between",
        // margin:"100px 300px"
      }}
    >
      <img
        style={{
          height: "300px",
          width: "550px",
          marginLeft: "150px",
          marginTop: "100px",
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          borderRadius: "25px",
          borderWidth: "10px",
          borderColor: "#ADD8E6",
          borderStyle: "solid",
        }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        src={project2}
        alt="Praneel"
      />

      <div
        style={{
          // display:"block",
          maxWidth: "600px",
          fontSize: "25px",
          color: "white",
          marginRight: "100px",
          marginLeft: "75px",
          marginTop: "100px",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "15px",
          padding: "20px",
          lineHeight: "1.6",
          fontFamily: "cursive",
          maxHeight: "500px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "15px", color: "#ADD8E6" }}>
          Inventory Management System
        </h2>
        Built a Flask-based inventory management system that lets members
        request items with clear details and allows admins to approve requests,
        manage stock, and track issued items. It improves transparency,
        accountability, and efficiency in club inventory handling.
        <div style={{ marginTop: "30px", textAlign: "center" }}>
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
              transition: "transform 0.3s ease",
            }}
            onMouseOver={MouseOver1}
            onMouseOut={MouseOut1}
            onClick={() => navigate("/projects")}
          >
            Previous
          </Button>
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
              transition: "transform 0.3s ease",
            }}
            onMouseOver={MouseOver1}
            onMouseOut={MouseOut1}
            onClick={() => navigate("/project3")}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
