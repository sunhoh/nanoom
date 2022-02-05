import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

function Nav() {
  const navigation = useNavigate();
  const ref = useRef();
  const [isAuth, setIsAuth] = useState(false);

  // console.log(localStorage.token);
  useEffect(() => {
    if (localStorage.token) {
      setIsAuth(true);
      console.log(isAuth);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
  };

  return (
    <Layout>
      <Header>
        <Menu
          style={{ backgroundColor: '#001529', color: '#fff', border: '0' }}
          mode="horizontal"
        >
          <>
            <Menu.Item
              key="/"
              onClick={() => {
                navigation('/');
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="/boardlist"
              onClick={() => {
                navigation('/boardlist');
              }}
            >
              게시판
            </Menu.Item>

            {isAuth ? (
              <Menu.Item
                key="logout"
                onClick={() => {
                  logout();
                  navigation('/');
                }}
              >
                로그아웃
              </Menu.Item>
            ) : (
              <>
                <Menu.Item
                  key="/signin"
                  onClick={() => {
                    navigation('/signin');
                  }}
                >
                  로그인
                </Menu.Item>
                <Menu.Item
                  key="/signup"
                  onClick={() => {
                    navigation('/signup');
                  }}
                >
                  회원가입
                </Menu.Item>
              </>
            )}
          </>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Nav;
