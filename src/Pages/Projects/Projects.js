import React,{useEffect} from 'react'
import Profilecard from '../../components/Profilecard/Profilecard'
import { ProjectData } from './ProjectData';
import { Container } from 'react-bootstrap';
import {MdPlaylistAddCheck} from "react-icons/md"
export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
      <div>
        <h1 className='display-1 text-center' style={{ color: "#F2E3D5" }}><MdPlaylistAddCheck/></h1>
        <h3 className="text-center" style={{ color: "#F2E3D5" }}>
          Projects
        </h3>
        <Container style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          
          <div>
          
           <div style={{display:'flex',gap:'6px',flexWrap:'wrap',justifyContent:'center'}}>
             
          {ProjectData.map((item,index)=>
            
             <Profilecard data={item} key={index}></Profilecard>
            
          )}
           </div>
           </div>
          
        </Container>
        </div>
    )
}
