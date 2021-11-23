import React from "react";
import styled, { keyframes } from "styled-components";

import "./ProgressBar.css";
export default function ProgressBar(props) {

  return (
    <Container>
      <ContainerTab>
        <TitleText>
          {props.children}</TitleText>
        <div className="progressbar">
          <Progressbar progress={280}>
            <Progressdone progressdone={props.progress}>
             
            </Progressdone>
           
          </Progressbar>
        </div>
      </ContainerTab>
    </Container>
  );
}

const ScreenSize = window.innerWidth
const load = keyframes`
  0%{width:10px;border-radius: 20px; }
  100%{width:${(props) => props.progressdone}px}
`;
const ContainerTab =styled.div`
width:${ScreenSize > 480 ? 320 : 280}px;
height:120px;
background:linear-gradient(#0F2027,#203A43,#2C5364);
box-shadow:0px 0px 24px #0F2027;
border-radius: 12px;
transition:all 0.4s ease-in-out;
:hover{
  transform:scale(1.1);
   0 0 5px #78d170,0 0 25px #78d170,0 0 25px #78d170,0 0 5px #78d170
  box-shadow: 0 0 5px #78d170,0 0 25px #78d170,0 0 25px #78d170,0 0 5px #78d170;
  
}
`
const Progressbar = styled.div`
  height: 6px;
  width: ${(props) => ScreenSize > 480 ? props.progress : 240}px;
  background: #d8d8d8;
  border-radius: 20px;
`;
const Progressdone = styled.div`
  background: yellowgreen;
  box-shadow: 0px 0px 4px #4fa5db;
  height: 100%;
  width: ${(props) => ScreenSize > 480 ? (props.progressdone)*280/100 : (props.progressdone)*240/100 || 10}px;
  border-radius: 20px;

  ${ContainerTab}:hover & {
    animation: ${load} 3s 3 alternate;
 }

`;
// const Value = styled.div`
//   height:24px;
//   width: 12px;
//   border-radius:50%
//   background-color:red;
//   `

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 24px;
margin-top:30px;
`
const TitleText = styled.h1`
color: rgb(221, 39, 26);
text-align: center;
font-size: 24px;`

// const Circle = styled.div`
// height:60px;
// width:60px;
// border-radius:50%;
// background:white;
// margin:0 auto;
// border:2px solid red;
// margin-top:10px;
// `
// const Number = styled.h1`
// text-align:center;
// margin-bottom:10px
