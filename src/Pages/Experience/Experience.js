import React, {useState } from "react";
import { ExperienceData } from "./ExperienceData";
import Headertext from "../../components/Headertext/Headertext";
import { IconContext } from "react-icons";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
export default function Experience({ itemClicked }) {
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
    <div style={{ background: "black" }} onClick={itemClicked}>
      <Headertext align="center" color="Yellow" size="48">
        Work Experience
      </Headertext>

      <div
        style={{
          minHeight: "100vh",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100vw" }}>
          {ExperienceData.map((data) => (
            <div
              key={data.id}
              style={{
                background: "rgb(20,22,30)",
                maxWidth: "100%",
                height: size.divWidth,
                borderRadius: "18px",
                padding: "20px",
                margin: "24px",
              }}
            >
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
                  alt='no view'
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

                  <div style={{lineHeight:'12px'}}>
                    <h1
                      style={{
                        fontSize: size.size1,
                        color: "#3361ea",
                        textAlign: size.textAlign2,
                      }}
                    >
                      {data.company}
                    </h1>
                    <p
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size3,
                        color: "#07f748",
                      }}
                    >
                      {data.type}
                    </p>
                    <h2
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size2,
                        color: "white",
                      }}
                    >
                      {data.role}
                    </h2>
                    <h3
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size3,
                        color: "#e54103",
                      }}
                    >
                      {data.technologies}
                    </h3>
                  </div>
                </div>
                <div style={{ lineHeight: "3px", textAlign: "center" }}>
                  <h3 style={{ color: "red", fontSize: size.size2 }}>
                    {data.date}
                  </h3>
                </div>
              </div>
               <Accordian >{data.summury} <a style={{textDecoration:'none',color:'red'}} href={data.website}>Please refer this website for more details {data.website}</a></Accordian> 
              <div className="opener">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Accordian = (props) => {
  const [height, maxHeight] = useState(false);
  let icon = height ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />;
  const openContent = () => {
    maxHeight(!height);
  };

  return (
    <div>
      <p
        className="paragraph"
        style={{ maxHeight: height ? "100vh" : "0", color: "yellow",overflow: "hidden",
        transition: "all 0.4s ease" }}
      >
        {props.children}
      </p>
      <IconContext.Provider value={{ color: "rgb(2, 200, 4)" }}>
                  <i
                    className="opener-icon"
                    style={{ fontSize: "32px" }}
                    onClick={openContent}
                  >
                    {icon}
                  </i>
        </IconContext.Provider>
    </div>
  );
};