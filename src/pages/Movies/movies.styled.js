import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 10px;
`;

export const BackTo = styled(Link)`
  background-color: whitesmoke;
  color: black;
  border: 1px solid grey;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: tomato;
  }
`;

export const WrapperForMain = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  display: flex;
  gap: 20px;
  border-bottom: 2px solid grey;
`;

export const GenreList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const AdditionalList = styled.ul`
  padding: 20px 40px;
  border-bottom: 2px solid grey;
`;
