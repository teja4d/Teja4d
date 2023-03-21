import React, { useEffect } from "react";
import "./About.css";
import { Container } from "react-bootstrap";


export default function About({ itemClicked }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //style={{padding:`${paddingValue}`}}
  return (
    <Container className="text-center mt-2">
      {/* <h1 className="display-1 text-center" style={{ color: "#F2E3D5" }}>
        <img src={myimage} className="about-image" alt="alt"></img>
      </h1> */}
      {/* <h3 className="text-center" style={{ color: "#F2E3D5" }}>
        About me
      </h3> */}

      <div className="cardBorder">
        <div className="about-container">
          <div onClick={itemClicked} className="about-wrapper">
            <div className="about-text">
             
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
