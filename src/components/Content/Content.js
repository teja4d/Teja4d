import React from 'react';
import Typist from 'react-typist';

import './Content.css'

export default function Content() {

    const steps = [
        "A Junior Web Developer",3000
    ]

    return (
        <div>
            <Typist avgTypingDelay={90}>
            <h1 className='welcome-text'>Welcome to My Digital Garden</h1>
            <h1 className='typer-text-start' >I'm a Student</h1>
            <Typist.Backspace className='flash' count={13} delay={400}>
            </Typist.Backspace>
            <h1 className='typer-text-end'>I ❤️ Programming</h1>
            </Typist>
        </div>
    )
}
