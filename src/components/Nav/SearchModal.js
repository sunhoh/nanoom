import React from 'react';
import styled from 'styled-components';

const SearchModal = props => {
  return (
    <Container isSelectSearch={props.isSelectSearch}>
      <Inner>
        <SearchBar>
          <i className="fas fa-search" />
          <input type="text" placeholder="무엇을 찾으시나요?" />
        </SearchBar>
      </Inner>
    </Container>
  );
};

export default SearchModal;

const Container = styled.div`
  transition: all 700ms ease 0s;
  ${props =>
    props.isSelectSearch &&
    `height:0; opacity: 0; transform: translateY(-200px);`};
`;

const Inner = styled.div`
  padding: 0px 20%;
`;

const SearchBar = styled.form`
  display: flex;
  align-items: center;git 
  background: #fff;
  padding: 1rem;
  border-radius: 50px;
  border: 1px solid #dddddd;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);

  .fa-search {
    margin-left: 20px;
    font-size: 26px;
  }
  input {
    width: 100%;
    margin-left: 20px;
    font-size: 20px;
  }
`;
