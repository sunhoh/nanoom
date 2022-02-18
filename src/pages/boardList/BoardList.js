import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import moment from 'moment';

const BoardList = () => {
  const navigation = useNavigate();

  const boardlist = useSelector(state => state.board);
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="wapper">
        <Button type="primary" onClick={() => navigation('/addboard')}>
          글쓰기
        </Button>
      </div>
      {boardlist.list.map(e => {
        return (
          <BoardInner id={e.id} key={e.id}>
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

// {todoList.list.map((e, idx) => {
//   return <Todo key={idx} idx={idx} text={e.text} />;
// })}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px;
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
