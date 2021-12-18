import React from 'react';
import styled from 'styled-components';

const { Kakao } = window;

const SignInKakao = () => {
  Kakao.init(process.env.REACT_APP_KAKAO_RESTAPI_KEY);
  Kakao.Auth.login({
    scope: 'profile_nickname,account_email,gender ',
    success: authObj => {
      fetch('http:localhost:3000', {
        method: 'POST',
      }).then(res => res.json());
      // .then(res => console.log('카카오 쇼셜 로그인'));
    },
  });
};

const KakaoLogin = () => {
  return (
    <Button onClick={SignInKakao}>
      <img
        alt="카카오 로그인 로고"
        src="/images/kakao_login_medium_narrow.png"
      />
    </Button>
  );
};

export default KakaoLogin;

const Button = styled.div`
  cursor: pointer;
`;
