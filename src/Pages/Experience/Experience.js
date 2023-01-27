import React, { useState, useEffect } from "react";
import { ExperienceData } from "./ExperienceData";
import "./Experience.css";
import {FaHandPointRight} from 'react-icons/fa'
import { MdWorkOutline ,MdOutlineExpandMore,MdOutlineExpandLess} from "react-icons/md";
import { Button, Card, Container } from "react-bootstrap";
export default function Experience({ itemClicked }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const desktop = {
    size1: "32px",
    size2: "24px",
    size3: "18px",
    logoHeight: 120,
    logoWidth: "120px",
    content: "space-between",
    divWidth: "100%",
    display: "flex",
    gap2: "18px",
    justifyContent: "space-between",
    gap1: "10%",
    textAlign: "start",
    alignItems: "center",
    textAlign2: "start",
  };
  const mobile = {
    size1: "18px",
    size2: "15px",
    size3: "12px",
    logoHeight: 40,
    logoWidth: "40px",
    content: "center",
    divWidth: "100%",
    display: "initial",
    gap2: "10px",
    justifyContent: "space-between",
    gap1: "10px",
    textAlign: "center",
    alignItems: "center",
    textAlign2: "center",
  };

  const size = window.innerWidth > 480 ? desktop : mobile;

  return (
    <div>
        <div >
        <h1 className="display-1 text-center" style={{ color: "#F2E3D5" }}>
          <MdWorkOutline />
        </h1>
        <p className="text-center" style={{ color: "#F2E3D5" }}>
          Experience
        </p>
        </div>
      <Container
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {ExperienceData.map((data) => (
            <Card key={data.id} className="exBorder">
              <div
                style={{
                  display: size.display,
                  justifyContent: size.justifyContent,
                  gap: size.gap1,
                  textAlign: size.textAlign,
                  alignItems: size.alignItems,
                  flexWrap: "wrap",
                  overflow: "hidden",
                  margin: "0 10px",
                }}
              >
                <div
                  style={{
                    display: size.display,
                    gap: size.gap2,
                    padding: "5px",
                  }}
                >
                  <img
                    alt="no view"
                    style={{
                      height: `${size.logoHeight}px`,
                      width: size.logoWidth,
                      borderRadius: `${size.logoHeight / 8}px`,

                      top: 0,
                      bottom: 0,
                      margin: "auto",
                    }}
                    src={data.logo}
                  ></img>

                  <div>
                    <h1
                      style={{
                        fontSize: size.size1,
                        color: "#80DEEA",
                        textAlign: size.textAlign2,
                      }}
                    >
                      {data.company}
                    </h1>
                    <p className="h6" style={{color:'#E0F7FA'}}>{data.date}</p>
                    <h2
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size2,
                        color: "#F2E3D5",
                      }}
                    >
                      {data.role}
                    </h2>
                    <div className="d-flex flex-wrap">
                      {data.technologies.map((x) => (
                        <Button
                          key={x}
                          size="sm"
                          variant="outline-info"
                          className=" mx-1 my-1"
                          style={{
                            textAlign: size.textAlign2,
                            fontSize: size.size3,
                            color: "light",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {x}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Accordian data={data.summury}></Accordian>
              <div className="opener"></div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

const Accordian = (props) => {
  const { data } = props;
  const [height, maxHeight] = useState(false);
  let icon = height ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />;
  const openContent = () => {
    maxHeight(!height);
  };

  return (
    <div>
      {height && (
        <div>
          {data.map((x) => (
            <>
              <p
                className="paragraph text-start px-3"
                style={{
                  maxHeight: height ? "100vh" : "0",
                  color: "#e2f8fe",
                  overflow: "hidden",
                }}
              >
                <FaHandPointRight></FaHandPointRight>
                &nbsp;
                {x}
              </p>
              <hr></hr>
            </>
          ))}
        </div>
      )}
      <h2 style={{color:'white',cursor:'pointer'}}>
        <i
          className="opener-icon"
          onClick={openContent}
        >
          {icon}
        </i>
      </h2>
    </div>
  );
};
