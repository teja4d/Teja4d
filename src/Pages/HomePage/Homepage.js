
import React,{useEffect} from 'react';
import './HomePage.css';
import Image from '../../components/Imagebox/Image';
import SocialIcons from '../../components/socialicons/SocialIcons';
import {Container } from 'react-bootstrap';


export default function HomePage({itemClicked}) {
  let name ="I'm DharmaTeja Vytla";
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container onClick={itemClicked} className='mt-5 text-center'>
      <div className='homeBackground' >
      <Image/>
      <Container className="mt-5">
      <div>
      <span>
      {[...name].map(x=>(
      <span className="display-2 display-md-4 content-title" style={{color:`hsl(${Math.floor(Math.random()*360)},100%,50%)`}}>{x}</span>
      ))}
      </span>
      <h3 className="content-subtitle">
        Full Stack Developer
      </h3>
      </div>
      <SocialIcons/>
      </Container>
      </div>
      </Container>
  );
}


