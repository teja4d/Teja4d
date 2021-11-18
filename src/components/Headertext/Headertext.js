import React from 'react'
import styled from 'styled-components'

export default function Headertext(props) {
  const  Header = styled.h1`
    color:${props=>props.color};
    margin:0;
    text-align:center;
    padding:32px;`
    return (
        <div>
            <Header color={props.color}>{props.children}</Header>
        </div>
    )
}
