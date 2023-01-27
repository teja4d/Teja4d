import React from "react";
import { IconContext } from "react-icons/lib";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Profilecard.css";
import { Badge, Card } from "react-bootstrap";
export default function Profilecard(props) {
  let colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];
  return (
    <Card style={{ backgroundColor: "#024959", width: "18rem" }}>
      <Card.Img
        src={props.data.image}
        variant="top"
        alt="no view"
        width="280px"
        height="280px"
      ></Card.Img>
      <Card.Header style={{ textAlign: "center", color: "#82ccdd" }}>
        {props.data.title}
      </Card.Header>
      <Card.Body >
       <div className="d-flex justify-content-center">
       <p className="text-start mt-2" style={{color:'#b8e994'}}>{props.data.summary}</p>
       </div>
        <div className="d-flex justify-content-center">
        {props.data.code.map((data, index) => (
          <Badge key={index} bg={colors[Math.floor(Math.random() * 6) + 1]} className="mx-1">
            {data.tech}
          </Badge>
        ))}
        </div>
      </Card.Body>
      <Card.Footer className="text-center">
        <IconContext.Provider value={{ color: "rgb(247, 203, 181)" }}>
          <p style={{ fontWeight: "bold" }}>
            <a
             className="text-decoration-none text-secondary"
              href={props.data.url}
            >
              View Project <FaExternalLinkAlt />
            </a>
          </p>
        </IconContext.Provider>
      </Card.Footer>
    </Card>
  );
}
