import React, { useState } from 'react';
import styled from 'styled-components';
import SearchModal from './SearchModal';

function Nav() {
  const [toggle, setToggle] = useState(true);
  const [isSelectSearch, setIsSelectSearch] = useState(true);

  return (
    <Container>
      <Inner>
        <Logo>Nanoom로고</Logo>
        <Gnb>
          <Search
            onClick={() => {
              setIsSelectSearch(isSelectSearch => !isSelectSearch);
            }}
          >
            {isSelectSearch ? (
              <i isSelectSearch={isSelectSearch} className="fas fa-search" />
            ) : (
              <i isSelectSearch={isSelectSearch} className="fas fa-times" />
            )}
          </Search>
          <LoginButton
            onClick={() => {
              setToggle(prev => !prev);
            }}
          >
            로그인
          </LoginButton>
        </Gnb>
      </Inner>
      <Modal isClickModal={toggle}>
        <div className="kakao">
          <Login />
        </div>
      </Modal>
      <SearchModal isSelectSearch={isSelectSearch} />
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.114);
  backdrop-filter: blur(5px);
`;

const Inner = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 10rem;
  height: 6.9375rem;
  transition: all 700ms ease 0s;
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
  font-size: 25px;
`;

const LoginButton = styled.div`
  padding: 8px;
  margin-left: 15px;
  border-radius: 20px;
  background: #ff9900;
  color: #fff;
  cursor: pointer;
`;

const Modal = styled.div`
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
