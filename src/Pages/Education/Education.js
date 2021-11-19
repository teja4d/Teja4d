import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Headertext from "../../components/Headertext/Headertext";
//import Contentbox from '../components/contentbox/Contentbox';
import unilogo from "../../assets/unilogo.jpeg";
import { EducationData } from "./EducationData";
export default function Education({ itemClicked, align }) {
  const [size, setSize] = useState({});
  const desktop = {
    size1: "32px",
    size2: "24px",
    size3: "18px",
    logoHeight: 120,
    logoWidth: "120px",
    content: "space-between",
    divWidth: "120px",
     display: "flex",
     gap2: "10px" ,
     justifyContent:"space-between",
      gap1: "60px",
     textAlign: "center",
     alignItems: "center",
     textAlign2:'start'
  };
  const mobile = {
    size1: "18px",
    size2: "15px",
    size3: "12px",
    logoHeight: 40,
    logoWidth: "40px",
    content: "center",
    divWidth: "180px",
    display: "initial",
     gap2: "10px" ,
     justifyContent:"space-between",
      gap1: "0px",
     textAlign: "center",
     alignItems: "center",
     textAlign2: "center",
  };
  useEffect(() => {
    window.innerWidth > 480 ? setSize(desktop) : setSize(mobile);
  }, []);

  return (
    <div style={{ background: "black" }} onClick={itemClicked}>
      <Headertext align="center" color="red" size="48">
        Education
      </Headertext>

      <div
        style={{
          height: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100vw", height: "100%" }}>
          {EducationData.map((data, index) => (
            <div
              key={index}
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
                display:size.display,
                justifyContent:size.justifyContent,
                gap: size.gap1,
                textAlign: size.textAlign,
                alignItems: size.alignItems
              }}>
                <div style={{ display: size.display, gap: size.gap2 }}>
                  <img
                    style={{
                      height: `${size.logoHeight}px`,
                      width: size.logoWidth,
                      borderRadius: `${size.logoHeight / 8}px`,
                    }}
                    src={data.logo}
                  ></img>

                  <div style={{ lineHeight: "12px" }}>
                    <h1 style={{ fontSize: size.size1, color: "#3361ea" }}>
                      {data.name}
                    </h1>
                    <p
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size3,
                        color: "#07f748",
                      }}
                    >
                      {data.location}
                    </p>
                    <h2
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size2,
                        color: "white",
                      }}
                    >
                      {data.course}
                    </h2>
                  </div>
                </div>
                <div style={{ lineHeight: "3px", textAlign: "center" }}>
                  <h3 style={{ color: "red", fontSize: size.size2 }}>
                    {data.year}
                  </h3>
                  <h3 style={{ color: "yellowgreen", fontSize: size.size2 }}>
                    {data.score}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// const ContentBox = window.innerWidth >480 ? styled.div`
//   display: flex;
//   justify-content:space-between;
//   gap: 60px;
//   text-align: center;
//   align-items: center;
// ` : <div></div>;




{
  /*  */
}

{
  /* <img
                style={{
                  height: `${size.logoHeight}px`,
                  width: size.logoWidth,
                  borderRadius: `${size.logoHeight / 8}px`,
                }}
                src={data.logo}
              ></img>
              <div style={{ lineHeight: "12px" }}>
                <h1 style={{ fontSize: size.size1, color: "#3361ea" }}>
                  {data.name}
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: size.size3,
                    color: "#07f748",
                  }}
                >
                  {data.location}
                </p>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: size.size2,
                    color: "white",
                  }}
                >
                  {data.course}
                </h2>
              </div>
              <div style={{ lineHeight: "3px", textAlign: "center" }}>
                <h3 style={{ color: "red", fontSize: size.size2 }}>
                  {data.year}
                </h3>
                <h3 style={{ color: "yellowgreen", fontSize: size.size2 }}>
                  {data.score}
                </h3>
              </div> */
}
