import React from 'react'
import Profilecard from '../../components/Profilecard/Profilecard'
import { ProjectData } from './ProjectData'
export default function Projects() {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'black'}}>
          <div style={{width:'100vw',height:'100%',marginTop:'60px'}}>
           <div style={{display:'flex',gap:'6px',flexWrap:'wrap',justifyContent:'center'}}>
          {ProjectData.map((item,index)=>
            
             <Profilecard data={item}></Profilecard>
            
          )}
           </div>
           </div>
          
        </div>
    )
}
