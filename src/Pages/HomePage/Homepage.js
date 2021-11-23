
import React,{useEffect} from 'react';
import './HomePage.css';
import Content from '../../components/Content/Content'
import Image from '../../components/Imagebox/Image';
import SocialIcons from '../../components/socialicons/SocialIcons';
import { VideoBg, VideoContainer } from '../../components/VideoBackground/VideoBg';
import video from '../../assets/videos/video.mp4'
import { useRef } from 'react';


export default function HomePage({itemClicked}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const videoRef = useRef(null);
  return (
    <div className="home-page" onClick={itemClicked}>
      <div className='home-wrapper'>
      <VideoContainer style={{opacity:0.5}}>
        <VideoBg ref={videoRef} autoPlay loop muted playback src={video}/>
      </VideoContainer>
      <div style={{zIndex:5,position:'relative'}}>
      <Image/>
      
      <h4 className="content-title">--Dharma Teja Vytla--</h4>
      <h4 className='support-letter'>as</h4>
      <h4 className='nick-name'>Teja4D</h4>
      <SocialIcons/>
      <Content></Content>
      </div>
      </div>
      </div>
  );
}


