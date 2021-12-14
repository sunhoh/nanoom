import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <Container>
      <Logo>Nanoom로고</Logo>
      <Gnb>
        <Search>
          <i class="fas fa-search" />
        </Search>
        <Login>로그인</Login>
      </Gnb>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
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
`;

const Logo = styled.div``;

const Gnb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Search = styled.div`
  cursor: pointer;
`;

const Login = styled.div`
  padding: 8px;
  margin-left: 15px;
  border-radius: 20px;
  background: #ff9900;
  color: #fff;
  cursor: pointer;
`;
