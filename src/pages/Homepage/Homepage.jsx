import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Homepage = () => {
  const [hits, setHits] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=f47740ae2875f781102cfee99d21c1c4'
        );
        setHits(results);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {hits?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id.toString()}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
