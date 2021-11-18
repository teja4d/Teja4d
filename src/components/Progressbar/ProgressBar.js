import React from "react";
import styled, { keyframes } from "styled-components";

import "./ProgressBar.css";
export default function ProgressBar(props) {

    const ScreenSize = window.innerWidth
  const load = keyframes`
    0%{width:10px;border-radius: 20px; }
    100%{width:${(props) => props.progressdone}px}
`;
  const Progressbar = styled.div`
    height: 12px;
    width: ${(props) => props.progress || 240}px;
    background: #d8d8d8;
    border-radius: 20px;
  `;
  const Progressdone = styled.div`
    background: linear-gradient(to left,#1c27bd,#4648b1);
    box-shadow: 3px 1px 3px -3px #1c27bd, 0 2px 5px #1c27bd;
    height: 100%;
    width: ${(props) => (props.progressdone)*320/100 || 10}px;
    border-radius: 20px;
    animation: ${load} 3s 3 alternate;
  `;
  const Value = styled.div`
    height:24px;
    width: 12px;
    border-radius:50%
    background-color:red;
    `
  const ContainerTab =styled.div`
  width:${ScreenSize > 480 ? 480 : 320}px;
  height:150px;
  background:linear-gradient(to bottom,#2e3534 , #0b1f1f) ;
  border-radius: 12px;
  padding: 0px 12px;
  
  `
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
  return (
    <Container>
      <ContainerTab>
        <TitleText>{props.children}</TitleText>
        <div className="progressbar">
          <Progressbar progress={320}>
   
            <Progressdone progressdone={props.progress}>
            <Value/>
            </Progressdone>
          </Progressbar>
        </div>
      </ContainerTab>
    </Container>
  );
}
