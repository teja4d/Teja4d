import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/TEJA4D.svg';
import { useState } from 'react';
import './Navbar.css';
import { Nav, NavLink } from 'react-bootstrap';
//import icons
import { FaHome,FaGraduationCap,FaHandSparkles} from 'react-icons/fa'; 
import { RiSuitcaseLine } from 'react-icons/ri';
import{AiOutlineApartment} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si";
import {GiGearStickPattern} from "react-icons/gi";

function NavbarMobile() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    //close navbar when clicked in mobile view
    const closeNav = () => {
        //excute in mobile view
        if (window.innerWidth <= 1024) {
            setNavbarOpen(!navbarOpen);
        }
    };
  return (
    <Navbar className="navBarMobile" variant="tabs" fixed="bottom" >
    <Container >
        <Nav.Item>
        <NavLink className="navLink2" href="/#/aboutme" onClick={closeNav}> <SiAboutdotme /></NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className="navLink6" href="/#/experience" onClick={closeNav}><RiSuitcaseLine /></NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className="navLink7" href="/#/skills" onClick={closeNav}><GiGearStickPattern /></NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className="navLink1" href="/#/home" onClick={closeNav} active ><FaHome /></NavLink>
        </Nav.Item>
        <Nav.Item> 
        <NavLink className="navLink3" href="/#/projects" onClick={closeNav}><AiOutlineApartment /></NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className="navLink4" href="/#/education" onClick={closeNav}><FaGraduationCap /></NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink className="navLink5" href="/#/aboutyou" onClick={closeNav}><FaHandSparkles/></NavLink>
        </Nav.Item>
     
    </Container>
  </Navbar>
  )
}

export default NavbarMobile;