import React, { useEffect } from "react";
import {BsPersonCircle} from 'react-icons/bs'
import "./About.css";
import { Container } from "react-bootstrap";
export default function About({ itemClicked }) {
  //const paddingValue = window.innerWidth > 480 ? "32px 300px" : "90px 20px";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //style={{padding:`${paddingValue}`}}
  return (
    <Container className="text-center">
      <h1 className="display-1 text-center" style={{ color: "#F2E3D5" }}>
        <BsPersonCircle />
      </h1>
      <p className="text-center" style={{ color: "#F2E3D5" }}>
      About me
        </p>

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
              <p>
                With my experience in Agile development environments, quick
                learning abilities and strong analytical and problem-solving
                skills, I can identify and resolve issues quickly and
                effectively. I have experience working as part of the core team
                to build accounting software that helps clients in Book Keeping,
                invoicing, taxation and other accounting services. Also, I have
                experience migrating products from Legacy and MVC-based web
                pages to modern SPA/PWA web application using react and
                typescript that offers an enhanced user experience. I have
                implemented reusable react components and custom hooks that
                significantly reduced the time required for creating upcoming
                features. I have also done Unit testing of the product.
              </p>
              <p>
                I am a team player and have experience collaborating with
                cross-functional teams to deliver high-quality software. I am a
                proactive learner and seek new challenges and opportunities to
                expand my knowledge and skills.
              </p>
              <p>
                My qualifications, experience, and passion for technology make
                me a valuable asset to any organization.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
