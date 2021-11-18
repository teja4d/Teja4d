import React from 'react'
import styled from 'styled-components'

export default function Headertext(props) {
  
    return (
        <div>
            <Header size={props.size} color={props.color}>{props.children}</Header>
        </div>
    )
}

const  Header = styled.h1`
    color:${props=>props.color} ;
    font-size:${props=>props.size ||32 }px;
    margin:0;
    text-align:center;
    padding:32px;
    text-decoration:underline;
    `