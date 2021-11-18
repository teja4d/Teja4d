import React from 'react'
import ProgressBar from '../components/Progressbar/ProgressBar'

export default function Skills() {
    return (

        <div style={{background:'black',height:"100vmax"}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:"0px",justifyContent:'space-evenly',alignItems:'center'}}>
        <ProgressBar progress={85}>JavaScript</ProgressBar>
        <ProgressBar progress={70}>Python</ProgressBar>
        <ProgressBar progress={85}>ReactJS</ProgressBar>
        <ProgressBar progress={65}>NodeJS</ProgressBar>
        <ProgressBar progress={55}>React Native</ProgressBar>
        <ProgressBar progress={60}>MangoDB</ProgressBar>
        <ProgressBar progress={40}>MySQL</ProgressBar>
        <ProgressBar progress={50}>Git</ProgressBar>
        <ProgressBar progress={75}>Bootstrap</ProgressBar> 
        </div>
        </div>
    //     <div onClick={itemClicked}>
    //     <h3 style={{"color":"yellowgreen",
    // "background":"linear-gradient(to bottom,#1a1f1e , #131b1b)",
    // "width":"100vw",
    
    // "position":'fixed',
    // "minHeight":"100vh",
    // "margin":'0',
    // "fontSize":"16px",
    // "display":"flex",
    // "justifyContent":"center",
    // "alignItems":"center",
    // "fontFamily":"Courier"
    // }}>This Page is under development !</h3>
    // </div>
    )
}
