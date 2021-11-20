import React from 'react'
import Headertext from '../../components/Headertext/Headertext'
import ProgressBar from '../../components/Progressbar/ProgressBar'
import { SkillsData } from './SkillsData';

import './Skills.css'
export default function Skills({itemClicked}) {
    return (
        <div className='skill-container' style={{background:'black'}} onClick={itemClicked}>
        <div style={{width: "100vw"}} >
        <Headertext color="White" size={48}>Skills</Headertext>
        {SkillsData.map((data,index)=>(
            <div>
            <Headertext color="green">{data.category}</Headertext>
            <div className='flex-box'>
            {(data.names).map(name => 
            <>

                <div>
              
                 <ProgressBar progress={name.value}>
                 <img
                 style={{
                  height:"50px",
                  width: "50px",
                  borderRadius: "8px",
                  display:'inline',
                  verticalAlign:'middle',
                  margin:"5px 5px 8px 8px"
                }}
                src={name.logo}
              ></img>
                     {name.name}
                </ProgressBar>
                 </div>
                  </>)}
            </div>
            <hr style={{border: "1px solid white",marginTop:'30px'}}></hr>
            </div>
        ))}
        </div>
        </div> 
        
    )}
