import React from 'react';
import styled from 'styled-components';
import Slider from './components/Slider';

function Main() {
  return (
    <Container>
      <Slider />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  height: 10000px;
  border: 1px solid black;
`;
