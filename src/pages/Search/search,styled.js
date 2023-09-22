import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: whitesmoke;
  color: black;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &&:hover {
    background-color: tomato;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #007bff;
  &&:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
