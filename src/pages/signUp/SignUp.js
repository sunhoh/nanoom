import React from 'react';
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
    password: Yup.string().required('패스워드를 입력하세요!'),
    checkpassword: Yup.string()
      .oneOf([Yup.ref('password'), null])
      .required('패스워드를 입력하세요!'),
  });

  return (
    <Container>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          checkpassword: '',
        }}
        validationSchema={validationSchema}
      />
      {({ handleChange, values }) => (
        <Form layout="vertical" autoComplete="off">
          <Wrapper>
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
          </Wrapper>
        </Form>
      )}
    </Container>
  );
};

export default SignUn;

const Container = styled.div`
  /* width: 100vw;
  height: 100vh;
  text-align: center; */
`;

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
