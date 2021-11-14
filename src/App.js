import React,{useState} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import About from './Pages/About';
import Menubar from './components/Menubars/Menubar';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import AboutYou from './Pages/AboutYou';
import HomePage from './components/HomePage/Homepage';
import Sidebar from './components/Sidebar/Sidebar';
import { SidebarData } from './components/Sidebar/SidebarData';
import Projects from './Pages/Projects';
export default function App() {

  const [isClicked,setClicked] = useState(false)
  const menuClicked=()=>{
    setClicked(!isClicked)
  }

  const clickedOutside = ()=>{
    setClicked(false)
  }
    return (
      <>
     <Router>
     {window.innerWidth>480 || isClicked ? <Sidebar showTitle={isClicked}/> : null}
     {window.innerWidth>480 ?<AnimatedCursor outerSize={24} innersize={12} outerScale={1.5} color='51, 235, 66'/>: null}
     <Menubar menuClicked={menuClicked}/>
      <Routes>
       
      <Route path='/' element={<HomePage/>}/>
      <Route path='/home' element={<HomePage itemClicked={clickedOutside}/>} />
      <Route path='about'  element={<About itemClicked={clickedOutside}/>}></Route>
      <Route path='education' element={<Education itemClicked={clickedOutside}/>}></Route>
      <Route path='experience' element={<Experience itemClicked={clickedOutside}/>}></Route>
      <Route path='skills' element={<Skills itemClicked={clickedOutside}/>}></Route>
      <Route path='aboutyou' element={<AboutYou itemClicked={clickedOutside}/>}></Route>
      <Route path='projects' element={<Projects itemClicked={clickedOutside}></Projects>}></Route>
      </Routes>
    </Router>
    </>
    )
}