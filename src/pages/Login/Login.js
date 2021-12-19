import React from 'react';
import styled from 'styled-components';
import KakaoLogin from './SocialLogin/KakaoLogin';
import GoogleLogin from './SocialLogin/GoogleLogin';

function Login() {
  return (
    <Container>
      <KakaoLogin />
      <GoogleLogin />
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 200px;
`;
