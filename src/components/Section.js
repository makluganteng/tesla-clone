import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            
            <Button>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText && 
                    <RightButton>
                    {rightBtnText}
                </RightButton>
                } 
               
            </ButtonGroup>
            </Fade> 
            <DownArrow src="/Tesla Clone LIVE/images/down-arrow.svg" />
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: 10;    
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column; //from top to bottom
    justify-content: space-between; //this is supposed to be horizontal but sine we change the flex direction this becomes vertical
    align-items: center; //this is supposed to be vertical but sine we change the flex direction this becomes horizontal
    background-image: ${props => `url("Tesla Clone LIVE/images/${props.bgImage}")` };
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
//it will inherit the left button
const RightButton = styled(LeftButton)` 
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img `
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Button = styled.div `

`