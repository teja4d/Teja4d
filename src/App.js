import React, {useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import PageRoutes from "./Routes/Routes";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ParticleComponent from "./components/Particles/Particle";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import logo from '../src/assets/TEJA4D.svg';
export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Router>
      {/* //if scree size is laptop show navbar */}
      <div className="d-none d-lg-block">
        <NavBar />
      </div>
      <div className="d-lg-none d-flex justify-content-center mt-2">
      <a href="/#/home">
          <img className='icon' src={logo} alt="Logo" width={120} />
          </a>
      </div>
      <div className="position-absolute">
      <ParticleComponent> 
      </ParticleComponent>
      </div>
      <PageRoutes />
      {/* if screen size is tab or movile show navmobile*/}
      <div className="d-lg-none">
        <NavbarMobile />
      </div>
    </Router>
  );
}
