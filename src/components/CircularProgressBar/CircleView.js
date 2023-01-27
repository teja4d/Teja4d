import styled, { keyframes } from "styled-components";
import image from '../../assets/skills/python.webp'
import React from 'react'

export default function CircleView(props) {
    const dia = window.innerWidth > 480 ? props.dia : props.dia*0.75;
    const thickness = window.innerWidth >480 ? props.thickness : props.thickness*0.5
    return (
         <div style={{position:'relative'}}>
            <CircleBar dia={dia} left={dia} right={dia} top="0" bottom="0">
                <Rectangle  height={dia} top={dia/2} 
                transfrom='50% 0' 
                delay='0'
                percentage={props.percentage < 50 ? ((props.percentage)*180/50):180}></Rectangle>
            </CircleBar>
            <CircleBar  dia={dia} left="0" right="0" top={dia} bottom={dia}>
                <Rectangle top={-dia/2} 
                height={dia}
                transfrom='50% 100%'
                 delay='3s'
                 percentage={props.percentage > 50 ? ((props.percentage-50)*180/50):0}></Rectangle>
            </CircleBar>
           
            <InnerCircle src={props.images} innerdia = {(dia)-(thickness)} sideHeight={thickness/2}/>
           
           
        </div>
    )
}

const animated = (percentage) => keyframes`
to{
    transform:rotate(${percentage}deg);
}`

const CircleBar = styled.div`
width:${props => props.dia}px;
height:${props => props.dia/2}px;
background-color:'white';
position:relative;
overflow:hidden;
border-top-left-radius:${props =>props.left}px;
border-top-right-radius:${props =>props.right}px;
border-bottom-left-radius:${props =>props.bottom}px;
border-bottom-right-radius:${props =>props.top}px;
`
const Rectangle = styled.div`
height:${props => props.height/2}px;
width:${props => props.height}px;
background:#47aab3;
position:absolute;
top:${props => props.top}px;
transform-origin:${props => props.transfrom};
animation:${props=>animated(props.percentage)} 3s forwards linear;
animation-delay: ${props=>props.delay};
`

const InnerCircle = styled.img`
position:absolute;
width: ${props=>props.innerdia}px;
height:${props=>props.innerdia}px;
border-radius:50%;
left:${props => props.sideHeight}px;
top:${props => props.sideHeight}px;`