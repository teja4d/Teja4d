import React, { useEffect } from "react";
import Headertext from "../../components/Headertext/Headertext";
import CircleView from "../../components/CircularProgressBar/CircleView";
import { SkillsData } from "./SkillsData";
import { MdEngineering } from "react-icons/md";
import "./Skills.css";
import { Button, Container } from "react-bootstrap";
export default function Skills({ itemClicked }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="skill-container">
      <div>
        <h2 className="display-1" style={{ color: "#F2E3D5" }}>
          {" "}
          <MdEngineering />
        </h2>
        <p className="text-center" style={{ color: "#F2E3D5" }}>
          Skills
        </p>
        <div className="d-md-flex flex-md-wrap">
          {SkillsData.map((data, index) => (
            <div>
              {data.names.map((name) => (
               <div className="">
                 <Container key={index} className="homeBorder" style={{width:"16rem"}}>
                  <div key={name.name} className=" d-flex justify-content-center">
                    <div>
                    <CircleView
                      percentage={name.value}
                      dia="150"
                      thickness="18"
                      images={name.logo}
                    >
                      {}
                    </CircleView>
                    <Button variant="outline-info" size="sm" className="mt-3">{name.name}</Button>
                    </div>
                  </div>
                </Container>
               </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// <img
//              alt='no view'
//              style={{
//               height:"50px",
//               width: "50px",
//               borderRadius: "50%",
//               display:'inline',
//               verticalAlign:'middle',
//               margin:"5px 5px 8px 8px"
//             }}
//             src={name.logo}
//           ></img>
