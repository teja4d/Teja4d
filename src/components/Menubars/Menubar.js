import React from 'react'
import './Menubar.css'
export default function Menubar({menuClicked}) {

    const IconClicked = ()=>{
        navigator.vibrate(20);
        menuClicked()
    } 

    return (
        <div className='menu' onClick={IconClicked}>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
        </div>
    )
}
