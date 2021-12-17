import React from 'react';
import styled from 'styled-components';

const { Kakao } = window;

const KakaoLogin = () => {
  Kakao.init(process.env.REACT_APP_KAKAO_RESTAPI_KEY);
  Kakao.Auth.login({
    scope: 'profile_nickname,account_email,gender ',
    success: authObj => {
      fetch('http:localhost:3000', {
        method: 'POST',
      })
        .then(res => res.json())
        .then(res => console.log('카카오 쇼셜 로그인'));
    },
  });
};

const SocialLogin = () => {
  return (
    <Button onClick={KakaoLogin}>
      <img
        alt="카카오 로그인 로고"
        src="/images/kakao_login_medium_narrow.png"
      />
    </Button>
  );
};

export default SocialLogin;

const Button = styled.div``;
