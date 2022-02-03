import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Button } from 'antd';

const SignUn = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 형식이 아닙니다!')
      .required('이메일을 입력하세요'),
    username: Yup.string().required('이름을 입력하세요!'),
    password1: Yup.string()
      .max(15, '비밀번호는 최대 15자리까지입니다.')
      .required('패스워드를 입력하세요!'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1'), null], '비밀번호가 일치하지 않습니다')
      .required('패스워드를 다시 입력하세요!'),
  });

  // console.log('@@@', Object.entries(validationSchema.fields));

  const submit = e => {
    // const allCheck = e => {
    //   Object.entries(validationSchema.fields).ever(list => list === false);
    // };

    sessionStorage.setItem('info', e.target.getAttribute('email'));
  };

  return (
    <Container>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password1: '',
          password2: '',
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Wrapper>
            <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
              <Form.Item className="input-form" label="이메일">
                <Input
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="email" />
                </div>
              </Form.Item>
              <Form.Item className="input-form" label="이름">
                <Input
                  value={values.username}
                  name="username"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="username" />
                </div>
              </Form.Item>
              <Form.Item className="input-form" label="비밀번호">
                <Input.Password
                  value={values.password1}
                  name="password1"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="password1" />
                </div>
              </Form.Item>
              <Form.Item className="input-form" label="비밀번호 확인">
                <Input.Password
                  value={values.password2}
                  name="password2"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="password2" />
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Wrapper>
        )}
      </Formik>
    </Container>
  );
};

export default SignUn;

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
