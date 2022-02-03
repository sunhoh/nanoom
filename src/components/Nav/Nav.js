import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

function Nav() {
  const navigation = useNavigate();

  return (
    <Layout>
      <Header>
        <Menu
          style={{ backgroundColor: '#001529', color: '#fff', border: '0' }}
          mode="horizontal"
          // selectedKeys={[menu]}
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
        </Menu>
      </Header>
    </Layout>
  );
}

export default Nav;
