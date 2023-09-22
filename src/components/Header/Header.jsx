import { LinkStyled, WrapperNav } from './header.styled';

export const Header = () => {
  return (
    <WrapperNav>
      <LinkStyled to="/">Homepage</LinkStyled>

      <LinkStyled to="/movies">Movies</LinkStyled>
    </WrapperNav>
  );
};
