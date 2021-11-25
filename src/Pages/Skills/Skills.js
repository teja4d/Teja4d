import React,{useEffect} from 'react'
import Headertext from '../../components/Headertext/Headertext';
import ProgressBar from '../../components/Progressbar/ProgressBar';
import CircleView from '../../components/CircularProgressBar/CircleView';
import { SkillsData } from './SkillsData';

import './Skills.css'
export default function Skills({itemClicked}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <div className='skill-container' style={{background:'black'}} onClick={itemClicked}>
        <div style={{width: "100vw"}} >
        <Headertext color="White" size={48}>Skills</Headertext>
        {SkillsData.map((data,index)=>(
            <div key={index}>
            <Headertext color="green">{data.category}</Headertext>
            <div className='flex-box'>
            {(data.names).map(name => 
                <div key={name.name}>
              
                 <CircleView percentage={name.value} dia='150' thickness='18' images={name.logo}>
                 
                     {name.name}
                </CircleView>
                 </div>
                 )}
            </div>
            <hr style={{border: "0.25 px solid white",marginTop:'30px'}}></hr>
            </div>
        ))}
        </div>
        </div> 
        
    )}



    // <img
    //              alt='no view'
    //              style={{
    //               height:"50px",
    //               width: "50px",
    //               borderRadius: "50%",
    //               display:'inline',
    //               verticalAlign:'middle',
    //               margin:"5px 5px 8px 8px"
    //             }}
    //             src={name.logo}
    //           ></img>