import React from 'react'
import styled from 'styled-components'

const Main = () => {
    return (
        <>
            <MainContainer>
                <h1>Test</h1>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    border: 1px solid black;
`

export default Main
