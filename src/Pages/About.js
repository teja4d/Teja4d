import React from 'react';
import CircleView from '../components/CircularProgressBar/CircleView';
import CircularBar from '../components/CircularProgressBar/CircularBar';
import image from '../assets/skills/python.webp'

export default function About({itemClicked}) {
    return (
        <CircleView dia='180' thickness='30' percentage='78' images={image}/>
    )
}
