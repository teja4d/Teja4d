import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";
import "./SocialIcons.css";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
export default function SocialIcons() {
  const icons = [
    {
      icon: <FaEnvelope />,
      url: "mailto:teja4d.com@gmail.com?subject=Hello Teja4D&body=I've viewed your website ...",
      text: "Open Email"
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/teja4d/",
      text: "Open LinkedIn"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Teja4d",
      text: "Open GitHub"
    },
    {
      icon: <FaTwitterSquare />,
      url: "https://twitter.com/teja4d",
      text: "Open Twitter"
    },
  ];
  const IconClicked = (item1, item2) => {
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }
  };
  return (
    <div className="icon-container mt-2">
      <span className="icon-wrapper">
        {[...icons].map((icon) => (
          <>
            <TooltipComponent
              icon={icon}
              key={icon.name}
              IconClicked={IconClicked}
            />
          </>
        ))}
      </span>
    </div>
  );
}

function TooltipComponent({ icon, IconClicked }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {icon.text}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 300 }}
      overlay={renderTooltip}
    >
      <Button className="mx-2 outlineIcon" size="sm" variant="default">
        <a
          href={icon.url}
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
        >
          <p
            className="h5"
            onClick={() => IconClicked("Socila Links", icon.url)}
          >
            {icon.icon}
          </p>
        </a>
      </Button> 
    </OverlayTrigger>
  );
}
