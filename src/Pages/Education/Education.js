import React,{useEffect} from "react";
//import Contentbox from '../components/contentbox/Contentbox';
import {FaGraduationCap} from 'react-icons/fa'
import { EducationData } from "./EducationData";
import { Container } from "react-bootstrap";
export default function Education({ itemClicked, align }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  const desktop = {
    size1: "32px",
    size2: "24px",
    size3: "18px",
    logoHeight: 120,
    logoWidth: "120px",
    content: "space-between",
    divWidth: "100%",
     display: "flex",
     gap2: "10px" ,
     justifyContent:"space-between",
      gap1: "10%",
     textAlign: "start",
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
      gap1: "10px",
     textAlign: "center",
     alignItems: "center",
     textAlign2: "center",
  };
  
  const size = window.innerWidth>480 ?desktop:mobile

  return (
    <Container onClick={itemClicked}>
      <h1 className="display-1 text-center" style={{ color: "#F2E3D5" }}>
        <FaGraduationCap />
       
      </h1>
      <h3 className="text-center" style={{ color: "#F2E3D5" }}>
      Education
        </h3>
      

      <div
        style={{
          height: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container >
          {EducationData.map((data, index) => (
            <div
              key={index}
              style={{
             
                background: "rgba(0, 0, 0, 0.5)",
                height: "100%",
                borderRadius: "8px",
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
                alignItems: size.alignItems,
                flexWrap:'wrap',
                overflow:'hidden'
              }}>
                <div style={{ display: size.display, gap: size.gap2,alignItems:'center' }}>
                  <img
                    style={{
                      height: `${size.logoHeight}px`,
                      width: size.logoWidth,
                      borderRadius: `${size.logoHeight / 8}px`,
                    }}
                    src={data.logo}
                    alt='no view'
                  ></img>

                  <div >
                    <h1 style={{fontSize: size.size1, color: "#fefefe"}}>
                      {data.name}
                    </h1>
                    <h2
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size2,
                        color: "#e26bed",
                      }}
                    >
                      {data.course}
                    </h2>
                    <p
                      style={{
                        textAlign: size.textAlign2,
                        fontSize: size.size3,
                        color: "#07f748",
                      }}
                    >
                      {data.location}
                    </p>
                   
                  </div>
                </div>
                <div style={{ lineHeight: "3px", textAlign: "center" }}>
                  <h3 style={{ color: "#47aab3", fontSize: size.size2 }}>
                    {data.year}
                  </h3>
                  <h3 style={{ color: "yellowgreen", fontSize: size.size2 }}>
                    {data.score}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </Container>
  );
}
