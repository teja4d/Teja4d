import React from "react";
import Headertext from "../../components/Headertext/Headertext";
import "./About.css";
export default function About({ itemClicked }) {
  //const paddingValue = window.innerWidth > 480 ? "32px 300px" : "90px 20px";
  //style={{padding:`${paddingValue}`}}
  return (
    <div>
    <div className="about-container">
      <div onClick={itemClicked} className="about-wrapper">
        <Headertext color="blue" size={42}>
          About Me
        </Headertext>
        <div className="about-text">
          <p>
            Teja loves when someone call him <span>Teja4D</span>.
          </p>
          <p>
            {" "}
            He is an <span> introvert </span>
            who is <span> fun loving,friendly</span> and with a decent knowledge
            in <span>latest technologies</span>
          </p>
          .
          <p>
            He is a highly motivated <span>self learner </span> and fond in
            learning <span>new technologies</span>
          </p>
          .
          <p>
            {" "}
            He loves using his <span>mobile</span> in his free time and a lazy
            guy who belives that everything can be done with a mobile.
          </p>
          <p>
            {" "}
            In his free time you find him doing <span>mobile rooting</span>
            ,exploring the latest <span>tech gadgets</span>.
          </p>
          <p> He is a type of guy who wants learn and do by his own. </p>
          <p className="about-fav">
            He beleives in <span>Destination ↔ Determination</span>
          </p>
          <p className="about-fav">
            Loves watching <span>Wrestling</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
