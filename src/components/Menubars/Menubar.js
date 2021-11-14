import React from 'react'
import './Menubar.css'
export default function Menubar({menuClicked}) {
    return (
        <div className='menu' onClick={menuClicked}>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
        </div>
    )
}
