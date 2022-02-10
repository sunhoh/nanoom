import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'antd';

const BoardList = () => {
  const navigation = useNavigate();

  return (
    <Container>
      <div className="wapper">
        <Button type="primary" onClick={() => navigation('/addboard')}>
          글쓰기
        </Button>
      </div>
    </Container>
  );
};

export default BoardList;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
  text-align: center;
  font-size: 16px;

  .wapper {
    /* border: 1px solid black; */
  }
`;
