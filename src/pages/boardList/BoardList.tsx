import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';
import moment from 'moment';

const BoardList = () => {
  const navigation = useNavigate();
  const boardList = useSelector(state => state.board);

  return (
    <Container>
      <div className="wapper">
        <Button type="primary" onClick={() => navigation('/addboard')}>
          글쓰기
        </Button>
      </div>
      {boardList.list.map((e, idx) => {
        return (
          <BoardInner
            key={idx}
            onClick={() => navigation(`/viewboard/${e.userId}`)}
          >
            <BoardItem>
              <p>제목 : {e.title}</p>
              <span className="text-rigth">
                <p>{e.userId}</p>
                <p>{moment(e.data).format('YYYY-MM-DD')}</p>
              </span>
            </BoardItem>
          </BoardInner>
        );
      })}
    </Container>
  );
};

export default BoardList;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 80px;
  min-width: 600px;
  text-align: center;
  font-size: 16px;

  .wapper {
    padding: 15px 0 30px;
  }
`;

const BoardInner = styled.div`
  cursor: Pointer;

  &:hover {
    background: #efefefd9;
    filter: blur(1px);
  }
`;

const BoardItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2e7ed;

  p {
    margin: 10px;
    padding: 20px;
  }
  .text-rigth {
    display: flex;
  }
`;
