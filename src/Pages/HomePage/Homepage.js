
import React,{useEffect} from 'react';
import './HomePage.css';
import Image from '../../components/Imagebox/Image';
import SocialIcons from '../../components/socialicons/SocialIcons';
import {Container } from 'react-bootstrap';


export default function HomePage({itemClicked}) {
  let name ="DharmaTeja Vytla";
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container onClick={itemClicked} className='text-center py-4 my-5'>
      <div className='homeBackground' >
      <Image/>
      <Container className="mt-5">
      <div className="d-none d-lg-block my-2">
      <span className="display-2 content-title">
      {name}
      </span>
      <h3 className="content-subtitle ">
        Full Stack Developer
      </h3>
      </div>
      <div className="d-md-none">
      <span className="display-3 content-title">
      {name}
      </span>
      <p className="content-subtitle my-2 h3-lg ">
        Full Stack Developer
      </p>
      </div>
      <SocialIcons/>
      <div className="p-3 my-4 text-white border border-1">
                <p>
                  I'm a self motivated software engineer with a keen
                  interest in fintech.I'm on
                  the lookout for an exciting opportunity to channel my skills
                  and experience towards the success of a technology-driven
                  company. Let's build something amazing together!.
                </p>
              </div>
      </Container>
      </div>
      </Container>
  );
}


