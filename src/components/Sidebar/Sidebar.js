import React from 'react'
//import {ProSidebar,Menu,MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { SidebarData } from './SidebarData';
import {AiFillHome} from 'react-icons/ai'
import './Sidebar.css'

export default function Sidebar({showTitle}) {

    return (
        <div className='side-bar'>
            <ul className='sidebar-list'>
            {SidebarData.map((item,index)=>(
                <li key={index} className='sidebar-item'>
                    <div className='sidebar-icon'>{item.icon}</div>
                    <div className='sidebar-title'>{item.tittle}</div>
                </li>
            ))}
            </ul>
        </div>
    )
}
