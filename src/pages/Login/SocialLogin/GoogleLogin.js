import React from 'react';
import styled from 'styled-components';
import { firebase } from '../SocialLogin/FirebaseAuth';

const SignInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const GoogleLogin = () => {
  return (
    <Button onClick={SignInGoogle}>
      <img alt="구글 로고" src="/images/Google.png" />
    </Button>
  );
};

const Button = styled.div`
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 6%);
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default GoogleLogin;
