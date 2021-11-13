import Navbar from './components/Navbar/Navbar';

import './App.css';
import Content from './components/Content/Content';
import Image from './components/Imagebox/Image';
import SocialIcons from './components/socialicons/SocialIcons';
import AnimatedCursor from 'react-animated-cursor'
import {BrowserRouter as Router } from 'react-router-dom' 


function App() {
  return (
    <div className="App">
      <Router>
      <Image/>
      <AnimatedCursor outerSize={24} innersize={12} outerScale={1.5} color='51, 235, 66'/>
      <h4 className="content-title">--DharmaTeja Vytla--</h4>
      <h4 className='support-letter'>as</h4>
      <h4 className='nick-name'>Teja4D</h4>
      <SocialIcons/>
      <Content></Content>
      </Router>
    </div>
  );
}

export default App;
