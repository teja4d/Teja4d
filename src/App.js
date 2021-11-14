import Navbar from './components/Navbar/Navbar';

import './App.css';
import Content from './components/Content/Content';
import Image from './components/Imagebox/Image';
import SocialIcons from './components/socialicons/SocialIcons';
import Menubar from './components/Menubars/Menubar';
import AnimatedCursor from 'react-animated-cursor';
import {BrowserRouter as Router } from 'react-router-dom' 
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  const [isClicked,setClicked] = useState(false)
  const menuClicked=()=>{
    setClicked(!isClicked)
  }

  return (
    <div className="App">
      <Router>
      {isClicked ? <Sidebar/> : null}
      <Menubar menuClicked={menuClicked}/>
      <div className='home-wrapper'>
      <Image/>
      {window.innerWidth>480 ?<AnimatedCursor outerSize={24} innersize={12} outerScale={1.5} color='51, 235, 66'/>: null}
      <h4 className="content-title">--Dharma Teja Vytla--</h4>
      <h4 className='support-letter'>as</h4>
      <h4 className='nick-name'>Teja4D</h4>
      <SocialIcons/>
      <Content></Content>
      </div>
     
      </Router>
    </div>
  );
}

export default App;
