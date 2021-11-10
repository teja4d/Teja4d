import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faLinkedin,faGithub,faTwitter, faFacebookF, faLinkedinIn, faGithubAlt} from '@fortawesome/free-brands-svg-icons'

import './SocialIcons.css'
export default function SocialIcons() {
    return (
        <div>
            <div className='icon-wrapper'>
           <FontAwesomeIcon className="list-items" icon={faFacebook} size='2x'></FontAwesomeIcon> 
           <FontAwesomeIcon className="list-items" icon={faLinkedinIn} size='2x'></FontAwesomeIcon> 
           <FontAwesomeIcon className="list-items" icon={faGithub} size='2x'></FontAwesomeIcon> 
           <FontAwesomeIcon className="list-items" icon={faTwitter} size='2x'></FontAwesomeIcon> 
           </div>
        </div>
    )
}
