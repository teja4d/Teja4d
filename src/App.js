import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import PageRoutes from "./Routes/Routes";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
//import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      {/* <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="247, 73, 51"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
      /> */}
      <NavBar></NavBar>
      <PageRoutes />
    </Router>
  );
}
