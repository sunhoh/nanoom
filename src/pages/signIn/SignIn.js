import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Button } from 'antd';
import { authService } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigation = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 형식이 아닙니다.')
      .required('이메일을 입력하세요!'),
    password: Yup.string()
      .max(15, '비밀번호는 최대 15자리까지입니다.')
      .required('비밀번호를 입력하세요!'),
  });

  const submit = async (values, e) => {
    const { email, password } = values;
    const userInfo = await authService
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('로그인 성공');
        navigation('/');
        localStorage.setItem('token', values.email);
      })
      .catch(error => {
        alert('error');
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
        {({ handleClick, handleChange, handleSubmit, values }) => (
          <Wrapper>
            {/* onSubmit -> onFinish 바뀜 */}
            <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
              <Form.Item className="input-form" label="Email">
                <Input
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
