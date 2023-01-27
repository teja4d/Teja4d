import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Menubar from "./components/Menubars/Menubar";
import Sidebar from "./components/Sidebar/Sidebar";
import PageRoutes from "./Routes/Routes";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/Homepage";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import AboutYou from "./Pages/AboutYou/AboutYou";
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
