import React from 'react';
import {Routes,Route} from 'react-router-dom'
import About from '../Pages/About/About';
import Education from '../Pages/Education/Education';
import Experience from '../Pages/Experience/Experience';
import AboutYou from '../Pages/AboutYou/AboutYou';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects'
import HomePage from '../Pages/HomePage/Homepage';
export default function PageRoutes({clickedOutside}) {
    return (
    
    <Routes>
      
     <Route path='/' element={<HomePage  itemClicked={clickedOutside}/>} />
     <Route path='home' element={<HomePage itemClicked={clickedOutside}/>} />
      <Route exact path='about'  element={<About itemClicked={clickedOutside}/>}></Route>
      <Route path='education' element={<Education itemClicked={clickedOutside}/>}></Route>
      <Route path='experience' element={<Experience itemClicked={clickedOutside}/>}></Route>
      <Route path='skills' element={<Skills itemClicked={clickedOutside}/>}></Route>
      <Route path='projects' element={<Projects itemClicked={clickedOutside}/>}></Route>
      <Route path='aboutyou' element={<AboutYou itemClicked={clickedOutside}/>}></Route>
    </Routes>
    )
}
