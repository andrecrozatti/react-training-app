import styled from 'styled-components';

// Estilização do TextArea usando styled-components
const TextAreaBlog = styled.textarea`
  width: 95%;
  height: 100px;
  border: 1px solid;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;

  resize: none;

  &:focus {
    outline: 2px solid #1da1f2;
  }

`;


export {TextAreaBlog}