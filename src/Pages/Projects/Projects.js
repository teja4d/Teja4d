import React,{useEffect} from 'react'
import Profilecard from '../../components/Profilecard/Profilecard'
import { ProjectData } from './ProjectData';
import Headertext from '../../components/Headertext/Headertext';
export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
      <div style={{marginTop:'5%'}}>
        <Headertext color="White" align="center" size={48}>Skills</Headertext>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'black'}}>
          
          <div style={{width:'100vw',height:'100vh',marginTop:'60px'}}>
          
           <div style={{display:'flex',gap:'6px',flexWrap:'wrap',justifyContent:'center'}}>
             
          {ProjectData.map((item,index)=>
            
             <Profilecard data={item}></Profilecard>
            
          )}
           </div>
           </div>
          
        </div>
        </div>
    )
}
