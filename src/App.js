import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Menubar from "./components/Menubars/Menubar";
import Sidebar from "./components/Sidebar/Sidebar";
import PageRoutes from "./Routes/Routes";
import "./App.css";
//import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
export default function App() {
  const [isClicked, setClicked] = useState(false);
  const screenSize = window.innerWidth;
  const menuClicked = () => {
    setClicked(!isClicked);
  };

  const clickedOutside = () => {
    setClicked(false);
  };
  return (
    <Router>
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="247, 73, 51"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      />
      <div style={{ display:"flex", backgroundColor: "black"}}>
        <div>
          {screenSize > 480 || isClicked ? (
           
            <Sidebar  menuClicked={menuClicked} showTitle={isClicked} />
           
          ) : <Menubar menuClicked={menuClicked} />}
          {/* <Menubar menuClicked={menuClicked} /> */}
          
        </div>
        <div style={{"overflowX": "hidden"}}>
          <PageRoutes clickedOutside={clickedOutside} />
        </div>
      </div>
    </Router>
  );
}
