import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'

import './SocialIcons.css'
export default function SocialIcons() {
    const icons = [faFacebook,faLinkedin,faGithub,faTwitter]
    const IconClicked = ()=>{
        navigator.vibrate(300);
        
    }
    return (
        <div>
            <div className='icon-wrapper'>
                {icons.map((icon,index)=><FontAwesomeIcon key={index} className="list-items" onClick={IconClicked} icon={icon} size='2x'></FontAwesomeIcon> )}
           </div>
        </div>
    )
}
