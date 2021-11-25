import React from 'react'
import './Menubar.css'
export default function Menubar({menuClicked}) {

    const IconClicked = ()=>{
        menuClicked();
        
        if(navigator.vibrate){
            navigator.vibrate(20);
        }
    } 

    return (
        <div className='menu' onClick={IconClicked}>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
        </div>
    )
}
