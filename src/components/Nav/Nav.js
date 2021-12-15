import React, { useState } from 'react';
import styled from 'styled-components';

function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Inner>
        <Logo>Nanoom로고</Logo>
        <Gnb>
          <Search>
            <i className="fas fa-search" />
          </Search>
          <Login
            onClick={() => {
              setToggle(prev => !prev);
            }}
          >
            로그인
          </Login>
        </Gnb>
      </Inner>
      <Modal isClickModal={toggle}>
        <li className="kakao">카카오톡으로 로그인</li>
      </Modal>
    </Container>
  );
}

export default Nav;

const Container = styled.div``;
const Inner = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 2rem;
  height: 6.9375rem;
  transition: all 700ms ease 0s;
  background-color: rgba(255, 255, 255, 0.114);
  backdrop-filter: blur(5px);
  /* border: 1px solid black; */
`;

const Logo = styled.div`
  border: 1px solid black;
`;

const Gnb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Search = styled.div`
  cursor: pointer;
  font-size: 20px;
`;

const Login = styled.div`
  padding: 8px;
  margin-left: 15px;
  border-radius: 20px;
  background: #ff9900;
  color: #fff;
  cursor: pointer;
`;

const Modal = styled.ul`
  position: absolute;
  right: 0;
  margin-right: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background: #fefefe;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);

  ${props => props.isClickModal && `display:none`};

  .kakao {
    padding: 15px;
    background: #fae100;
    border-radius: 10px;
    cursor: pointer;
  }
`;
