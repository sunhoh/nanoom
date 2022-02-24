import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Button } from 'antd';
import { authService } from '../../Firebase';
import { firebaseInstance } from '../../Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/modules/auth';

const SignIn = props => {
  const navigation = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 형식이 아닙니다.')
      .required('이메일을 입력하세요!'),
    password: Yup.string()
      .max(15, '비밀번호는 최대 15자리까지입니다.')
      .required('비밀번호를 입력하세요!'),
  });

  const submit = async values => {
    const { email, password } = values;
    await authService
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('로그인 성공');
        navigation('/');
        const myData = { email: values.email };
        const token = sessionStorage.setItem('token', JSON.stringify(myData));
        dispatch(setToken(token));
        props.setIsAuth(true);
      })
      .catch(error => {
        alert('error');
      });
  };

  const SignInGoogle = values => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    authService.signInWithPopup(provider).then(() => {
      alert('로그인 성공');
      sessionStorage.setItem('token', 'google');
      navigation('/');
      props.setIsAuth(true);
    });
  };

  // 기간 지나서 안뜸 일단 내비둠
  const { Kakao } = window;

  const SignInKakao = e => {
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

  return (
    <Container>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Wrapper>
            <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
              <Form.Item className="input-form" label="Email">
                <Input
                  ref={inputRef}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="email" />
                </div>
              </Form.Item>
              <Form.Item className="input-form" label="Password">
                <Input.Password
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="password" />
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  로그인
                </Button>
              </Form.Item>
            </Form>
            <SocialLogin>
              <img
                alt="구글 로고"
                src="/images/Google.png"
                onClick={SignInGoogle}
              />
              <img
                alt="카카오 로고"
                src="/images/kakao.png"
                onClick={SignInKakao}
              />
            </SocialLogin>
          </Wrapper>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .input-form {
    width: 400px;

    .error-message {
      color: blue;
    }
  }
`;

const SocialLogin = styled.div`
  display: flex;
  width: 400px;
  height: 150px;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 10px;
    width: 50%;
    height: 50%;
    padding: 10px;
    box-shadow: 0 4px 20px 0 rgb(0 0 0 / 6%);
    cursor: pointer;
  }
  img:nth-child(1) {
    width: 40%;
    height: 45%;
  }
`;
