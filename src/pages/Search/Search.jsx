import { useLocation, useSearchParams } from 'react-router-dom';
import { Wrapper } from '../Movies/movies.styled';
import { Button, Form, Input, LinkStyled } from './search,styled';
import { useHTTP } from 'components/hooks/useHTTP';
import { getByQuary } from 'components/service/api';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();
  const quary = searchParams.get('movie') || '';
  const { data } = useHTTP(getByQuary, quary);
  console.log(searchParams);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ movie: e.currentTarget.elements.movie.value });
    e.currentTarget.reset();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="movie" />
        <Button>Search</Button>
      </Form>
      <ul>
        {data?.map(movie => {
          return (
            <li key={movie.id}>
              <LinkStyled
                to={`/movies/${movie.id.toString()}`}
                state={{ from: location }}
              >
                <h2>{movie.title}</h2>
              </LinkStyled>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
