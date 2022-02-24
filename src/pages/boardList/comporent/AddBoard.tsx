import React, { useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { createList } from '../../../redux/modules/board';
import { useNavigate } from 'react-router-dom';

const AddBoard = props => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('제목을 입력하세요!'),
    content: Yup.string().required('내용을 입력하세요!'),
  });

  const submit = values => {
    const { title, content } = values;
    const newBoard = {
      title: title,
      content: content,
      userId: sessionStorage.getItem(sessionStorage.key('token')),
      date: Date.now(),
    };
    dispatch(createList(newBoard));
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
        onSubmit={submit}
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
