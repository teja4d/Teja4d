import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbarlogo from './Navbarlogo/Navbarlogo';
import List from '../Lists/List'
import Button from '../Button/Button'
import './Navbar.css'
export default function Navbar() {
    const listItems = ["Services","About","Contact"]
    return (
        <Router>
             <div className="navbar-container">
             <Navbarlogo/>
                 <List listItems = {listItems}></List>
            <Button>Download CV </Button>
            </div>
        </Router>
    )
}
