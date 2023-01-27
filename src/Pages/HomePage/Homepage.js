
import React,{useEffect} from 'react';
import './HomePage.css';
import Content from '../../components/Content/Content'
import Image from '../../components/Imagebox/Image';
import SocialIcons from '../../components/socialicons/SocialIcons';
import { Card, Container } from 'react-bootstrap';


export default function HomePage({itemClicked}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container onClick={itemClicked} className='mt-5 text-center'>
      <div className='homeBorder' >
      <Image/>
      <h4 className="content-title">--Dharma Teja Vytla--</h4>
      <h4 className='support-letter'>as</h4>
      <h4 className='nick-name'>Teja4D</h4>
      <SocialIcons/>
      </div>
      </Container>
  );
}


