import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { NullLiteral } from 'typescript';

const TOTAL_SLIDES = 3;

const Home = () => {
  const [current, setCurrent] = useState(0);
  const slideRef = useRef<HTMLInputElement>(null);

  const NextSlide = () => {
    current >= TOTAL_SLIDES - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const PrevSlide = () => {
    current === 0 ? setCurrent(0) : setCurrent(current - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${current}00%)`;
  }, [current]);

  return (
    <Container>
      <SliderInner ref={slideRef}>
        <img src="/images/main/img01.jpg" alt="" />
        <img src="/images/main/img02.jpg" alt="" />
        <img src="/images/main/img03.jpg" alt="" />
      </SliderInner>
      <Button>
        <PrevBtn onClick={PrevSlide}>왼</PrevBtn>
        <NextBtn onClick={NextSlide}>오</NextBtn>
      </Button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  overflow: hidden;
`;

const SliderInner = styled.div`
  display: flex;

  img {
    width: 100%;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;

const NextBtn = styled.button`
  padding: 1rem;
`;
const PrevBtn = styled.button`
  padding: 1rem;
`;
