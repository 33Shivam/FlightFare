import React from 'react';
import Home from './components/Home.jsx';
import styled from 'styled-components';
import ResponsiveAppBar from './components/NavBar.jsx';

const Container = styled.div`
height: 100vh;
width: 100vw;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
color: white; 
background-image: url('/background.jpg');
scrollbar-width: 0;
&::-webkit-scrollbar {
  display: none;}
`;

function App() {
  return (

    <Container>
       <ResponsiveAppBar />
    <Home />
    </Container>

     )
}

export default App