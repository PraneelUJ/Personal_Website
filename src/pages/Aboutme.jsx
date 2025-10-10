import React from "react";
import praneel from "./praneel.jpg";
import praneel2 from "./praneel2.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PixelTransition from "./PixelTransition";

export default function Aboutme() {
  const navigate = useNavigate();

  // Image hover
  function MouseOver(event) {
    event.target.style.transform = "scale(1.2)";
    event.target.style.boxShadow = "0 8px 20px #ADD8E6";
  }
  function MouseOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "none";
  }

  // Button hover
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

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",       // vertical centering
        justifyContent: "center",   // horizontal centering
        flexWrap: "wrap",           // responsive layout
        minHeight: "70vh",         // full height centering
        gap: "80px",                // spacing between image and text
        // backgroundColor: "black",   // background contrast
        padding: "40px",
      }}
    >
      {/* Left: Pixel Transition Image */}
      <PixelTransition
        firstContent={
          <img
            src={praneel2}
            alt="Praneel Joshi"
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "20px",
              objectFit: "cover",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          />
        }
        secondContent={
          <div
            style={{
              width: "350px",
              height: "350px",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111",
              borderRadius: "20px",
            }}
          >
            <img
              src={praneel}
              alt="Praneel alternate"
               style={{
              width: "350px",
              height: "350px",
              borderRadius: "20px",
              objectFit: "cover",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            />
          </div>
        }
        gridSize={12}
        pixelColor="#ffffff"
        animationStepDuration={0.4}
        className="custom-pixel-card"
      />

      {/* Right: About Text */}
      <div
        style={{
          maxWidth: "600px",
          fontSize: "25px",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.6)",
          borderRadius: "15px",
          padding: "25px 30px",
          lineHeight: "1.6",
          fontFamily: "cursive",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "15px",
            color: "#ADD8E6",
            fontFamily: "Michroma",
          }}
        >
          Hello All !!!!
        </h2>
        I am <b>Praneel Joshi</b>, a Junior Undergraduate at the Indian
        Institute of Technology Gandhinagar. I am pursuing a major in Electrical
        Engineering with a minor in Computer Science. I hail from Thane,
        Maharashtra.
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <Button
            style={{
              fontSize: "30px",
              margin: "20px",
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
            onClick={() => navigate("/extracurricular")}
          >
            Extra Curriculars
          </Button>
          <Button
            style={{
              fontSize: "30px",
              margin: "20px",
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
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
