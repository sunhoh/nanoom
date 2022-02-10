import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AddBoard = props => {
  const navigation = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('제목을 입력하세요!'),
    content: Yup.string().required('내용을 입력하세요!'),
  });

  const submit = values => {
    // console.log(values);
    navigation('/boardlist');
  };

  return (
    <Container>
      <Formik
        initialValues={{
          title: '',
          content: '',
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Wapper>
            <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
              <Form.Item className="form" label="제목">
                <Input
                  ref={inputRef}
                  value={values.title}
                  name="title"
                  onChange={handleChange}
                  onSubmit={submit}
                />
                <div className="error-message">
                  <ErrorMessage name="title" />
                </div>
              </Form.Item>
              <Form.Item className="form" label="내용">
                <Input.TextArea
                  value={values.content}
                  name="content"
                  onChange={handleChange}
                />
                <div className="error-message">
                  <ErrorMessage name="content" />
                </div>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Wapper>
        )}
      </Formik>
    </Container>
  );
};

export default AddBoard;

const Container = styled.div``;

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;

  .form {
    width: 400px;
  }

  textarea {
    resize: none;
  }
`;
