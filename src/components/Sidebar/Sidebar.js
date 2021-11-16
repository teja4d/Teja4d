import React from 'react';
import { Link } from 'react-router-dom';
//import {ProSidebar,Menu,MenuItem} from 'react-pro-sidebar';
import { SidebarData } from './SidebarData';
import {IconContext } from 'react-icons';
import './Sidebar.css'

export default function Sidebar({showTitle}) {

    return (
        <div className='side-bar'>
            <ul className='sidebar-list'>
            {SidebarData.map((item,index)=>(
                <Link to={item.path}  key={index} className='sidebar-item'>
                    <IconContext.Provider value={{color:"rgb(247, 73, 51)"}}>
                    <div className='sidebar-icon'>{item.icon}</div>
                    </IconContext.Provider>
                  {showTitle ? <div className='sidebar-title'>{item.tittle}</div> : null}
                </Link>
            ))}
            </ul>
        </div>
    )
}
