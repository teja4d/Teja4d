import React from 'react'
import Headertext from '../../components/Headertext/Headertext'
import ProgressBar from '../../components/Progressbar/ProgressBar'
import './Skills.css'
export default function Skills({itemClicked}) {
    return (

        <div style={{background:'black',height:"100%"}} onClick={itemClicked}>
            <div>
        <Headertext color="red" size={48}>Skills</Headertext>
        <Headertext color='yellowgreen'>Programming</Headertext>
        <div className='flex-box'>
        <ProgressBar progress={85}>JavaScript</ProgressBar>
        <ProgressBar progress={70}>Python</ProgressBar>
       
        </div>
        <hr style={{border: "1px solid white",margin:'10px'}}></hr>
        <Headertext color='yellowgreen'>FrameWorks</Headertext>
        <div className='flex-box'>
        <ProgressBar progress={85}>ReactJS</ProgressBar>
        <ProgressBar progress={65}>NodeJS</ProgressBar>
        <ProgressBar progress={55}>React Native</ProgressBar>
        </div>
        <hr style={{border: "1px solid white",margin:'10px'}}></hr>
        <Headertext color='yellowgreen'>DataBases</Headertext>
        <div className='flex-box'>
        <ProgressBar progress={60}>MangoDB</ProgressBar>
        <ProgressBar progress={40}>MySQL</ProgressBar>
      
        </div>
        <hr style={{border: "1px solid white",margin:'10px'}}></hr>
        <Headertext color='yellowgreen'>Others</Headertext>
        <div className='flex-box'>
        <ProgressBar progress={50}>Git</ProgressBar>
        <ProgressBar progress={75}>Bootstrap</ProgressBar> 
        </div>
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
