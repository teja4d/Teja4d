import React from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../Menubars/Menubar';
import { SidebarData } from './SidebarData';
import {IconContext } from 'react-icons';
import './Sidebar.css'

export default function Sidebar({showTitle,menuClicked}) {
    const display = window.innerWidth>480 ? "sticky":"fixed";
    const padding = window.innerWidth>480 ? "40px":"30px";

    const IconClicked = ()=>{
        navigator.vibrate(20);
        menuClicked()
    }
    return (
        <div className='side-bar' style={{position:display}}>
            <div className='sidebar-list'>
            <Menubar menuClicked={IconClicked} />
            {SidebarData.map((item,index)=>(
                <div className='sidebar-box'  key={index} style={{"paddingTop":padding}}>
                <Link to={item.path}  onClick={IconClicked}  className='sidebar-item'>
                    <IconContext.Provider value={{color:"rgb(247, 73, 51)"}}>
                    <i className='sidebar-icon'>{item.icon}</i>
                    </IconContext.Provider>
                  {showTitle ? <div>
                      <h1 className='sidebar-title'>{item.tittle}</h1>
                      </div> : null}
                </Link>
                </div>
            ))}
            </div>
        </div>
    )
}
