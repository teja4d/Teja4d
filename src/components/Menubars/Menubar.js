import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './Menubar.css'
export default function Menubar({menuClicked}) {


    return (
        <div className='menu' onClick={menuClicked}>
    
             <div>
             <div className='menu-bar'></div>
             <div className='menu-bar'></div>
             <div className='menu-bar'></div>
            </div>
        </div>

    )
};
 
