import React from 'react';
import styled from 'styled-components';

const ViewBoard = () => {
  return (
    <Container>
      <Wapper>
        <TitleInner>d</TitleInner>
        <ContentInner>d</ContentInner>
        <CommentInner>da</CommentInner>
      </Wapper>
    </Container>
  );
};

export default ViewBoard;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Wapper = styled.div`
  margin: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const TitleInner = styled.div``;

const ContentInner = styled.div``;

const CommentInner = styled.div``;
