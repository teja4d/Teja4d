import React from 'react'
import './About.css'
export default function About({itemClicked}) {
    const paddingValue = window.innerWidth > 480 ? "32px 300px" : "90px 20px";
    return (
        <div className='about-container' style={{padding:`${paddingValue}`}}>
        <div onClick={itemClicked} className='about-wrapper'>
        <h3 className='about-title'>About Teja</h3>
        <p className='about-text'>Teja loves when someone call him Teja4D.He is an <span> introvert </span> 
            who is <span> fun loving,friendly</span> and with a decent knowledge in <span>latest technologies</span>.
            He is a highly motivated <span>self learner </span> and fond in learning <span>new technologies</span>.
            He loves using his <span>mobile</span> in his free time and a lazy guy who belives that everything can be done with a mobile.
            In his free time you find him doing <span>mobile rooting</span>,exploring the latest <span>tech gadgets</span>.
            He is a type of guy who wants learn and do by his own. </p>
        <p className='about-fav'>He beleives in <span>Destination ↔ Determination</span></p>
        <p className='about-fav'>Loves watching  <span>Wrestling</span></p>
        </div>
        </div>
    )
}
