import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./SocialIcons.css";
import { Button } from "react-bootstrap";
export default function SocialIcons() {
  const icons = [
    {
      icon: faEnvelope,
      url: "mailto:teja4d.com@gmail.com?subject=Hello Teja4D&body=I've viewed your website ...",
    },
    {
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/teja4d/",
    },
    {
      icon: faGithub,
      url: "https://github.com/Teja4d",
    },
    {
      icon: faTwitterSquare,
      url: "https://twitter.com/teja4d",
    },
  ];
  const IconClicked = () => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  };
  return (
    <div className="icon-container mb-4">
      <div className="icon-wrapper">
        {[...icons].map((icon, index) => (
          <Button className="mx-2 outlineIcon" size="sm" variant="default">
            <a key={index} href={icon.url} style={{color:'inherit'}}>
              <FontAwesomeIcon
                className="text-info"
                onClick={IconClicked}
                icon={icon.icon}
                size="2x"
              ></FontAwesomeIcon>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
