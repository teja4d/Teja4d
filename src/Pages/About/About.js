import React,{useEffect} from "react";
import Headertext from "../../components/Headertext/Headertext";
import "./About.css";
export default function About({ itemClicked }) {
  //const paddingValue = window.innerWidth > 480 ? "32px 300px" : "90px 20px";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //style={{padding:`${paddingValue}`}}
  return (
    <div>
    <div className="about-container">
      <div onClick={itemClicked} className="about-wrapper">
        <Headertext color="White" size={42}>
          About Me
        </Headertext>
        <div className="about-text">
          <p>
            Teja loves when someone call him <span>Teja4D</span>.
          </p>
          <p>
            {" "}
             He is a self-motivated software developer with quick learning capabilities
             and proven personal projects. 
             <p>
             Looking forward to working in 
             a fast-paced tech company.
            </p>
          </p>
          {" "}
          <p className="about-fav">
            Beleives in  <span>Destination ↔️ Determination</span>
          </p>
          {" "}
          <p className="about-fav">
            Loves watching <span>Wrestling</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
