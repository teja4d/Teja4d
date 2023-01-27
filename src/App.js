import React, {useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import PageRoutes from "./Routes/Routes";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
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
