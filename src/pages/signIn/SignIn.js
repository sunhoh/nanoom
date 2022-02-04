import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Button } from 'antd';
import { authService } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState(false);

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
    const data = await authService
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        alert('good');
        navigation('/');
      })
      .catch(error => {
        alert(
          `로그인에 실패하였습니다!
          아이디와 패스워드를 확인해주세요!`
        );
      });
  };

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        console.log('dasdsa');
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, [user]);

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
            <Form layout="vertical">
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
