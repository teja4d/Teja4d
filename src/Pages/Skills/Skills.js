import React,{useEffect} from 'react'
import Headertext from '../../components/Headertext/Headertext';
import ProgressBar from '../../components/Progressbar/ProgressBar';
import CircleView from '../../components/CircularProgressBar/CircleView';
import { SkillsData } from './SkillsData';

import './Skills.css'
import { Container } from 'react-bootstrap';
export default function Skills({itemClicked}) {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
        <Container className='skill-container'>
        <div >
        <Headertext color="White" size={48}>Skills</Headertext>
        <div className='d-flex'>
        {SkillsData.map((data,index)=>(
            <Container key={index} className='homeBorder'>
            <Headertext color="green">{data.category}</Headertext>
            <div className='flex-box'>
            {(data.names).map(name => 
                <div key={name.name} className='my-2'>
              
                 <CircleView percentage={name.value} dia='150' thickness='18' images={name.logo}>
                 
                     {name.name}
                </CircleView>
                 </div>
                 )}
            </div>
            </Container>
        ))}
        </div>
        </div>
        </Container> 
        
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