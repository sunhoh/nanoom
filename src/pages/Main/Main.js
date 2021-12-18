import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <Container>
      <div className="main" />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  /* position: relative; */
  width: 100%;
  height: 10000px;
  border: 1px solid black;
`;
