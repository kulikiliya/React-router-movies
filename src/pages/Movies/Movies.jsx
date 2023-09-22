import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import {
  WrapperForMain,
  Wrapper,
  BackTo,
  GenreList,
  AdditionalList,
} from './movies.styled';
import { useHTTP } from 'components/hooks/useHTTP';
import { getMainList } from 'components/service/api';

const Movies = () => {
  const { id } = useParams();
  const location = useLocation();
  const backToHrefLink = useRef(location.state?.from || '/');
  console.log(location);

  const { data, loading } = useHTTP(getMainList, id);

  const { title, vote_average, overview, genres, poster_path } = data;

  const imgNotFound = 'http://placekitten.com/g/200/300';
  return loading ? (
    <p>Loading</p>
  ) : (
    <Wrapper>
      <BackTo to={backToHrefLink.current}>
        <span>{String.fromCharCode(0x2190)}</span> Go back
      </BackTo>
      <WrapperForMain>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
            onError={e => {
              e.currentTarget.src = imgNotFound;
            }}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>User score: {parseInt(Math.floor(vote_average * 10))}%</p>
          <h2>Overview</h2>
          {overview ? <p>{overview}</p> : <p>Nothing</p>}
          <h3>Genres</h3>
          <GenreList>
            {genres?.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </GenreList>
        </div>
      </WrapperForMain>
      <div>
        <h2>Additional information</h2>
        <AdditionalList>
          <li>
            <Link to={`/movies/${id.toString()}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id.toString()}/reviews`}>Reviews</Link>
          </li>
        </AdditionalList>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Movies;
