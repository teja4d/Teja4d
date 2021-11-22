import React from 'react'
import image from '../../assets/image.jpeg';
import Headertext from '../Headertext/Headertext';
import { IconContext } from 'react-icons/lib';
import {FaExternalLinkAlt} from 'react-icons/fa'
import './Profilecard.css'
import { BoldHeader } from '../boldbuttons/Boldheader';
export default function Profilecard(props) {
    console.log(props)
    return (
        <div className='profile-card'>
        <div className='profiles'>
            <img src={props.data.image} className='images'></img>
            <h3 style={{textAlign:'center',color:'coral'}}>{props.data.title}</h3>
            <div style={{display:'flex',gap:'8px'}}>
           {props.data.code.map((data,index)=>(
                 <BoldHeader colour ={data.color}>{data.tech}</BoldHeader>
           ))}
          
            </div>
           
            <div style={{margin:"5px"}}>
            <p style={{textAlign:'center',maxWidth:'320px',color:'white'}}>{props.data.summary}</p>
            </div>
           
            <div style={{position:'absolute',top:'88%'}}>
            <IconContext.Provider  value={{color:"rgb(247, 203, 181)"}}>
                    <p style={{fontWeight:'bold'}}><a style={{textDecoration:'none',color:'yellow'}} href={props.data.url}>View Project <FaExternalLinkAlt/></a></p>
             </IconContext.Provider>
             </div>
        </div>
    </div>
    )
}
