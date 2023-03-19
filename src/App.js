import React, {useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import PageRoutes from "./Routes/Routes";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ParticleComponent from "./components/Particles/Particle";
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Router>
      <NavBar></NavBar>
      <div className="position-absolute">
      <ParticleComponent> 
      </ParticleComponent>
      </div>
      <PageRoutes />
    </Router>
  );
}
