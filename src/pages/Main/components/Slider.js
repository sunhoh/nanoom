import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const IMG = [
  {
    id: 1,
    img: '/images/main/img01.jpg',
  },
  {
    id: 2,
    img: '/images/main/img02.jpg',
  },
  {
    id: 3,
    img: '/images/main/img03.jpg',
  },
];

const TOTAL_SLIDES = 3;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    currentSlide > TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Container>
      <SliderInner ref={slideRef}>
        {IMG.map(e => (
          <Slide key={e.id} id={e.id} img={e.img} />
        ))}
      </SliderInner>
      <Button>
        <PrevBtn onClick={NextSlide}>왼</PrevBtn>
        <NextBtn onClick={PrevSlide}>오</NextBtn>
      </Button>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  border: 1px solid black;
`;

const SliderInner = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid black;
  background: #00000038;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  background: #00000038;
`;

const NextBtn = styled.button`
  padding: 1rem;
`;
const PrevBtn = styled.button`
  padding: 1rem;
`;
