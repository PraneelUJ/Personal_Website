import React from "react";
import praneel from "./praneel.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Aboutme() {
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
    event.target.style.fontFamily="Michroma";
    event.target.style.transform= "scale(1.2)";
    event.target.style.boxShadow= "0 8px 20px rgba(0, 255, 255, 0.8)";
  }
  function MouseOut1(event) {
    event.target.style.background = "black";
    event.target.style.fontFamily="fascinate";
    event.target.style.color="white";
    event.target.style.transform= "scale(1)";
    event.target.style.boxShadow="none"  ;
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
          height: "400px",
          width: "300px",
          marginLeft: "300px",
          marginTop: "100px",
          transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          borderRadius: "25px",
          borderWidth: "10px",
          borderColor: "#ADD8E6",
          borderStyle: "solid",
        }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        src={praneel}
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
          Hello All !!!!
        </h2>
        I am <b>Praneel Joshi</b>. I am a Junior Undergraduate at the Indian
        Institute of Technology Gandhinagar. I am pursuing a major in Electrical
        Engineering with a minor in Computer Science. I hail from Thane,
        Maharashtra.
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
            onClick={() => navigate("/extracurricular")}
          >
            Extra Curriculars
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
            onClick={() => navigate("/projects")}
          >
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
