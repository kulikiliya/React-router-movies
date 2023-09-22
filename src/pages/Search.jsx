import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Wrapper } from './movies.styled';
import { Button, Form, Input, LinkStyled } from './search,styled';

export const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();
  const quary = searchParams.get('movie');
  console.log(searchParams);

  useEffect(() => {
    if (searchParams.size === 0) {
      return;
    }
    const findMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${quary}&api_key=f47740ae2875f781102cfee99d21c1c4`
        );
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    findMovie();
  }, [quary]);

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
        {movies?.map(movie => {
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
