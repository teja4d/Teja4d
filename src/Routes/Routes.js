import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from '../Pages/About';
import Education from '../Pages/Education';
import Experience from '../Pages/Experience';
import AboutYou from '../Pages/AboutYou';
import Skills from '../Pages/Skills';
import HomePage from '../App'
export default function Routes() {
    return (
     <Router>
    <Routes>
     <Route path='/' element={<HomePage/>} />
      <Route exact path='about'  element={<About/>}></Route>
      <Route path='education' element={<Education/>}></Route>
      <Route path='experience' element={<Experience/>}></Route>
      <Route path='skills' element={<Skills/>}></Route>
      <Route path='aboutyou' element={<AboutYou/>}></Route>
    </Routes>
    </Router>
    )
}
