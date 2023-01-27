import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/TEJA4D.svg';
import {Link } from 'react-router-dom';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
function NavBar() {
  return (
    <>
      <Navbar expand="xl" className='navBar'>
        <Container className="text-center">
          <Navbar.Brand href="">
          <img className='icon' src={logo} alt="Logo" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
           {/* add navbar items */}
           <Navbar.Collapse id="basic-navbar-nav" >
           <Nav className='navLink mr-xl-4'>
            <Link className="navLink1" to="/home"> Home</Link>
            <Link className="navLink2" to="/aboutme"> About Me</Link>
            <Link className="navLink6" to="/experience">Experience</Link>
            <Link className="navLink7" to="/skills">Skills</Link>
            <Link className="navLink3" to="/projects">Projects</Link>
            <Link className="navLink4" to="/education">Education</Link>
            <Link className="navLink5" to="/aboutyou">Something about you ?</Link>
          </Nav>
           </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;