import Navbar from './components/Navbar/Navbar';

import './App.css';
import Content from './components/Content/Content';
import Image from './components/Imagebox/Image';
import SocialIcons from './components/socialicons/SocialIcons';

import {BrowserRouter as Router } from 'react-router-dom' 


function App() {
  return (
    <div className="App">
      <Router>
      <Image/>
      <h4 className="content-title">--DharmaTeja--</h4>
      <SocialIcons/>
      <Content></Content>
      </Router>
    </div>
  );
}

export default App;
