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
    <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "18rem" }}>
      <Card.Header style={{ textAlign: "center", color: "#82ccdd" }}>
        <b>{props.data.title}</b>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-center">
          <p className="text-start mt-2" style={{ color: "#b8e994" }}>
            {props.data.summary}
          </p>
        </div>
      </Card.Body>
      <Card.Footer className="text-center">
        <IconContext.Provider value={{ color: "" }}>
          <p>
            <a
              className="text-decoration-none text-light"
              href={props.data.url}
              target="_blank"
              rel="noreferrer"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </p>
        </IconContext.Provider>
        <div className="d-flex justify-content-center">
          {props.data.code.map((data, index) => (
            <Badge
              key={index}
              bg={colors[Math.floor(Math.random() * 6) + 1]}
              className="mx-1"
            >
              {data.tech}
            </Badge>
          ))}
        </div>
      </Card.Footer>
    </Card>
  );
}
