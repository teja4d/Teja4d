import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitterSquare,
  FaEnvelope
} from "react-icons/fa";
import "./SocialIcons.css";
import { Button } from "react-bootstrap";
import { trackAmplitude } from "../Navbar/Navbar";
export default function SocialIcons() {
  const icons = [
    {
      icon: <FaEnvelope/>,
      url: "mailto:teja4d.com@gmail.com?subject=Hello Teja4D&body=I've viewed your website ...",
    },
    {
      icon: <FaLinkedinIn/>,
      url: "https://www.linkedin.com/in/teja4d/",
    },
    {
      icon: <FaGithub/>,
      url: "https://github.com/Teja4d",
    },
    {
      icon: <FaTwitterSquare/>,
      url: "https://twitter.com/teja4d",
    },
  ];
  const IconClicked = (item1,item2) => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
      trackAmplitude(item1,item2)
    }
  };
  return (
    <div className="icon-container mb-4">
      <div className="icon-wrapper">
        {[...icons].map((icon, index) => (
          <Button className="mx-2 outlineIcon" size="sm" variant="default">
            <a key={index} href={icon.url} style={{color:'inherit'}} target="_blank" rel="noreferrer">
              <h4
                className="text-info"
                onClick={()=>IconClicked('Socila Links',icon.url)}
              >{icon.icon}</h4>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
