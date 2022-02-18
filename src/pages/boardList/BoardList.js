import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'antd';

const BoardList = () => {
  const navigation = useNavigate();
  const [boardlist, setBoardlist] = useState([
    { id: 1, title: 'aaa', userId: 1, time: '' },
    { id: 2, title: 'aaa', userId: 2, time: '' },
  ]);

  return (
    <Container>
      <div className="wapper">
        <Button type="primary" onClick={() => navigation('/addboard')}>
          글쓰기
        </Button>
      </div>
      {boardlist.map(e => {
        return (
          <div className="board-wapper" key={e.id}>
            <div className="board">
              <p>{e.title}</p>
              <span className="text-rigth">
                <p>{e.userId}</p>
                <p>{e.time}</p>
              </span>
            </div>
          </div>
        );
      })}
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
    padding: 15px 0 30px;
    /* border: 1px solid black; */
  }

  .board-wapper {
    cursor: Pointer;
    &:hover {
      background: aquamarine;
    }
  }

  .board {
    display: flex;
    justify-content: space-between;
    border: 1px solid black;

    p {
      padding: 10px;
      border: 1px solid black;
    }
    .text-rigth {
      display: flex;
    }
  }
`;
