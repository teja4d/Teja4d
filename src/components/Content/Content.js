import React from 'react';
import Typical from 'react-typical';

import './Content.css'

export default function Content() {

    const steps = [
        "A Junior Web Developer",3000,
        "Welcome to My Digital Garden",2000
    ]

    return (
        <div>
            <h1 className="content-title">Hello! I'm TEJA</h1>
           <h2 className="content-items"><Typical steps={steps} loop={Infinity}/></h2>
        </div>
    )
}
