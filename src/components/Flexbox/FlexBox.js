import React from 'react'
import styled from 'styled-components'

export default function FlexBox() {
    const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:0px;
    justify-content:space-evenly;
    align-items:center
    `
    return (
            <Flex></Flex>
    )
}
