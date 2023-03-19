import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/TEJA4D.svg';
import {Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { Nav } from 'react-bootstrap';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  //close navbar when clicked in mobile view
  const closeNav = () => {
   //excute in mobile view
    if (window.innerWidth <= 1024) {
      setNavbarOpen(!navbarOpen);
    }
  };

  return (
    <> 
      <Navbar expand="xl" className='navBar'expanded={navbarOpen} >
        <Container className="text-center">
          <Navbar.Brand href="/#/home">
          <img className='icon' src={logo} alt="Logo" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={closeNav} />
           {/* add navbar items */}
           <Navbar.Collapse id="basic-navbar-nav" >
           <Nav className='navLink mr-xl-4'>
            <Link className="navLink1" to="/home" onClick={closeNav} > Home</Link>
            <Link className="navLink2" to="/aboutme" onClick={closeNav}> About Me</Link>
            <Link className="navLink6" to="/experience" onClick={closeNav}>Experience</Link>
            <Link className="navLink7" to="/skills" onClick={closeNav}>Skills</Link>
            <Link className="navLink3" to="/projects" onClick={closeNav}>Projects</Link>
            <Link className="navLink4" to="/education" onClick={closeNav}>Education</Link>
            <Link className="navLink5" to="/aboutyou" onClick={closeNav}>Something about you ?</Link>
          </Nav>
           </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;