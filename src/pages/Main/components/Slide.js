import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return (
    <Container>
      <Img src={img} />
    </Container>
  );
}

const Container = styled.div`
  z-index: -1;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;
