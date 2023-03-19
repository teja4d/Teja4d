import React, { useEffect } from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import myimage from "../../assets/myimage.webp";
export default function About({ itemClicked }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //style={{padding:`${paddingValue}`}}
  return (
    <Container className="text-center mt-2">
      <h1 className="display-1 text-center" style={{ color: "#F2E3D5" }}>
        <img src={myimage} className="about-image" alt="alt"></img>
      </h1>
      <h3 className="text-center" style={{ color: "#F2E3D5" }}>
      About me
        </h3>

      <div className="cardBorder">
        <div className="about-container">
          <div onClick={itemClicked} className="about-wrapper">
            <div className="about-text">
              <div className="px-3 text-start my-4">
              <p>
                As a self-motivated and enthusiastic software engineer
                specialising in fintech, I have a proven track record of
                proactively participating in building and improving the
                software. I am seeking an exciting opportunity to leverage my
                skills and experience to contribute to the success of a
                technology-driven company.
              </p>
              <p>
                My core expertise lies in technologies such as JavaScript, C#,
                Typescript, React Js, Express Js, .net, and React Native. I have
                hands-on experience with REST APIs, databases, and the Azure
                cloud. Additionally, I have a strong foundation in mechanical
                subjects and am proficient in CAD software such as Solidworks
                and analysis software like Ansys. I am also well-versed in Agile
                development methodologies such as Scrum and Kanban.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
