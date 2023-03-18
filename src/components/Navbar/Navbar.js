import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/TEJA4D.svg';
import {Link } from 'react-router-dom';
import './Navbar.css';
import { Nav } from 'react-bootstrap';
import { track } from '@amplitude/analytics-browser';

export const trackAmplitude = (item1,item2)=>{

  track('Navbar Clicked', 
  {buttonName: item2,
   url:'/'+item1
  });
}

function NavBar() {
  return (
    <>
      <Navbar expand="xl" className='navBar' >
        <Container className="text-center">
          <Navbar.Brand href="">
          <img className='icon' src={logo} alt="Logo" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
           {/* add navbar items */}
           <Navbar.Collapse id="basic-navbar-nav" >
           <Nav className='navLink mr-xl-4'>
            <Link className="navLink1" to="/home" onClick={()=>trackAmplitude('home','Home')} > Home</Link>
            <Link className="navLink2" to="/aboutme" onClick={()=>trackAmplitude('aboutme','About Me')}> About Me</Link>
            <Link className="navLink6" to="/experience" onClick={()=>trackAmplitude('experience','Experience')}>Experience</Link>
            <Link className="navLink7" to="/skills" onClick={()=>trackAmplitude('skills','Skills')}>Skills</Link>
            <Link className="navLink3" to="/projects" onClick={()=>trackAmplitude('projects','Projects')}>Projects</Link>
            <Link className="navLink4" to="/education" onClick={()=>trackAmplitude('education','Education')}>Education</Link>
            <Link className="navLink5" to="/aboutyou" onClick={()=>trackAmplitude('aboutyou','Something about you ?')}>Something about you ?</Link>
          </Nav>
           </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;