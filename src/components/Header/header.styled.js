import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperNav = styled.nav`
  display: flex;

  background-color: whitesmoke;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #333;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  padding: 25px;
  color: black;
  font-weight: 700;
  border-right: 1px solid black;
  &&:hover {
    color: tomato;
    text-decoration: underline;
  }
  &&:focus {
    color: green;
  }
  &&:active {
    color: green;
  }
`;
