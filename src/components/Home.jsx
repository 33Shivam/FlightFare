import styled from 'styled-components';
import Flight from './Flight';
import TextField from '@mui/material/TextField';
import { maxWidth } from '@mui/system';
import ReactDOM from "react-dom";
import React, { Component } from 'react';
import { render } from 'react-dom';
import Typewriter from 'typewriter-effect';
import { delay, motion } from "framer-motion";
import './Button.css';  


const Section = styled.div`
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
justify-content: space-between;
/* background-color: coral; */
`
const Container = styled.div`
height: 100vh;
width: 1400px;
display: flex;
justify-content: space-between;
width: 1400px;
/* background-color: blue; */
`;

const Left = styled.div`
flex: 1;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: red; */
padding: 40px 0px 40px 0px;

`;

const Right = styled.div`
flex: 1;
position: relative;
justify-content : center;
/* background-color: yellow; */
overflow: visible;
display: flex;
`;
const Up = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
/* background-color: green; */
flex: 1;
gap: 5px;

`;

const Down1 = styled.div`
flex: 0.2;
justify-content: center;
font-family: 'Josefin Sans', sans-serif;
margin-top: 16px;
/* background-color: pink; */
`;
const Down = styled.div`
flex: 1;
justify-content: center;
position: relative;
padding: 36px 0px 0px 0px;
font-family: 'Josefin Sans', sans-serif;
font-weight: 400;
font-size: 20px;   
/* background-color: pink; */
`;



const Card = styled(motion.div)`
position: relative;
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px 10px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background-color: rgba(65, 65, 65, 0.308);
  border: 1px solid rgba(255, 255, 255, 0.089);
  cursor: pointer;
  
`;
const CardContainer = styled(motion.div)`
position: relative;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
&::before {
  width: 200px;
  height: 200px;
  content: "";
  position: absolute;
  filter: blur(10px);
  background-color: rgba(144, 161, 255, 0.372);
  z-index: -2;
  border-radius: 50%;
  left: 100px;
  top: 50px;
  transition: all 1s;
  }
  
    &:hover::before {
        transform: translate(-50px ,50px);
        
    }
`;

const TextFeild = styled.div`
  background: 0;
  border: 0;
  outline: none;
  width: 80vw;
  max-width: 400px;
  font-size: 1.5em;
  transition: padding 0.3s 0.2s ease;

  &:focus {
    padding-bottom: 5px;
  }

  // sibling magic ;o
  &:focus + .line {
    &:after {
      transform: scaleX(1);
    }}
`;

const LeftCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
/* background-color: #806b00; */
flex: 1;
gap: 70px;
`;

const RightCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: green; */
flex: 1;
gap: 70px;  
`;

const _Input = styled.input`
  background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#514f4f, #585454);
  border: 0 none;
  border-radius: 0;
  box-shadow: none;
  font-family: 'Josefin Sans', sans-serif;
  float: none;
  background-color: transparent;
  background-position: center bottom, center calc(100% - 1px);
  background-repeat: no-repeat;
  background-size: 0 2px, 100% 1px;
  padding: 0 ;
  transition: background 0s ease-out 0s;
  color: #ffffff;
  min-height: 35px;
  display: initial;
  width: 80%;
  outline: none;
  font-size: 15px;
  &:focus {
      background-size: 100% 2px, 100% 1px;
      outline: 0 none;
      transition-duration: 0.3s;
      color: #ffffff;
    }
    &::placeholder {
       color: #ffffff;
       font-family: 'Josefin Sans', sans-serif;
       font-weight: 800;
 ;
   }
`;



// Button CSS
const Button = styled(motion.button)`
background-color: #929292;
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: #0d172a;
    cursor: pointer;
    display: inline-block;
    font-family: 'calibri', 'sans-serif';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding: 0.7rem 1.2rem 0.6rem 1.2rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .1s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    letter-spacing: 0.2rem;
    

    &:hover {
    background-color: #1e293b;
    color: #fff;
    scale: 1.1;
    /* animation: hoverAnimation 0.5s ease-in-out; */
  }

  /* @keyframes hoverAnimation {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.1;
    }
    100% {
      scale: 1;
    }
  } */
`;



 
const Home = () => {


    return (
        <Section>
            <Container>
                <Left>
                    <Up>
                        <CardContainer initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
                            <Card initial={{  scale: 0 , zIndex: 1}}
      whileInView={{  scale: 1 , zIndex: 1}}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} >                <LeftCard>
        
                            <_Input type='text' placeholder=" From"  />
                            <_Input type='text' placeholder=" Airlines" />
                            <_Input  type="text" placeholder="Boarding Date"
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} />
      </LeftCard>
                            <RightCard>
                            <_Input type='text' placeholder=" To"  />
                            <_Input type='text' placeholder="Stopage" />
                            <_Input type="text" placeholder="Return Date"
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} />

                            </RightCard>                            
                            </Card>
                            
                        </CardContainer>
                    </Up>
                    <Down1>
                      <Button initial={{  scale: 0 , zIndex: 1}} whileInView={{  scale: 1 , zIndex: 1}}  transition={{ duration: 2.7, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }} >
                      PREDICT</Button> 
                    </Down1>

                    <Down>

                    <Typewriter 
 
 onInit={(typewriter) => {
     typewriter
     .changeDelay(5)
         .typeString("The Flight Fare Prediction model is a powerful tool that leverages machine learning techniques to estimate the cost of airline tickets. It has practical applications for travelers, airlines, and travel agencies, as it can provide valuable insights into pricing trends and help in making informed decisions.")
         
         .start();
 }}
/>              </Down>
                </Left>
                <Right>
                <Flight/>
                </Right>
                </Container>
        </Section>
    );
};

export default Home;