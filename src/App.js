import Navbar from './components/Navbar/Navbar';

import './App.css';
import Content from './components/Content/Content';
import Image from './components/Imagebox/Image';
import SocialIcons from './components/socialicons/SocialIcons';


function App() {
  return (
    <div className="App">
      <Image/>
      <SocialIcons/>
      <Content></Content>
    </div>
  );
}

export default App;
