import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 10vh;
  width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

const underlineAnimation = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const Items = styled.div`
  height: 10vh;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
  position: relative;
  /* Add the animation */
  &:after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: 0;
    width: 100%;
    height: 2.5px;
    border-radius: 64px;
    background-color: transparent;
    transform-origin: left;
    transition: background-color 0.3s;
  }
  &:hover::after {
    background-color: #ffffff; /* Change the color to your desired underline color */
    animation: ${underlineAnimation} 0.3s forwards;
    
  }
`;

const NavBar = () => {
  return (
    <Section>
      <Container>
        <Items>Home</Items>
        <Items>About</Items>
        <Items>Model</Items>
        <Items>FAQs</Items>
      </Container>
    </Section>
  );
};

export default NavBar;
