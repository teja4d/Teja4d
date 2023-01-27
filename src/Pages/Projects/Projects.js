import React,{useEffect} from 'react'
import Profilecard from '../../components/Profilecard/Profilecard'
import { ProjectData } from './ProjectData';
import Headertext from '../../components/Headertext/Headertext';
import { Container } from 'react-bootstrap';
export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
      <div>
        <Headertext color="White" align="center" size={48}>Projects</Headertext>
        <Container style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          
          <div>
          
           <div style={{display:'flex',gap:'6px',flexWrap:'wrap',justifyContent:'center'}}>
             
          {ProjectData.map((item,index)=>
            
             <Profilecard data={item}></Profilecard>
            
          )}
           </div>
           </div>
          
        </Container>
        </div>
    )
}
