import React from 'react'
import styled from 'styled-components'

export default function Headertext(props) {
  
    return (
        <div>
            <Header size={props.size} align={props.align} color={props.color}>{props.children}</Header>
        </div>
    )
}

const  Header = styled.h1`
    color:#F2E3D5 ;
    font-size:${props=>props.size ||32 }px;
    margin:0;
    text-align:${props=>props.align};
    padding:24px;
    
    `