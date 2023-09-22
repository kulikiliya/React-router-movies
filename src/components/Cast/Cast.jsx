import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f47740ae2875f781102cfee99d21c1c4`
        );
        setPerson(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  console.log(person);

  return (
    <div>
      <ul>
        {person.length ? (
          person?.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <p>Nothing</p>
        )}
      </ul>
    </div>
  );
};
export default Cast;
