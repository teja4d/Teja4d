

import './HomePage.css';
import Content from '../Content/Content'
import Image from '../Imagebox/Image';
import SocialIcons from '../socialicons/SocialIcons';



export default function HomePage({itemClicked}) {
  
  return (
      <>
    <div className="home-page" onClick={itemClicked}>
      
      <div className='home-wrapper'>
      <Image/>
      
      <h4 className="content-title">--Dharma Teja Vytla--</h4>
      <h4 className='support-letter'>as</h4>
      <h4 className='nick-name'>Teja4D</h4>
      <SocialIcons/>
      <Content></Content>
      </div>
      </div>
      </>

  );
}


