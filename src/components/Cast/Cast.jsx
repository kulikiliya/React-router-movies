import { useHTTP } from 'components/hooks/useHTTP';
import { getCast } from 'components/service/api';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const { data } = useHTTP(getCast, id);
  const imgNotFound = 'http://placekitten.com/g/200/300';
  console.log(data);
  return (
    <div>
      <ul>
        {data.length ? (
          data?.map(item => {
            return (
              <li key={item.id}>
                <hr />
                <img
                  src={`https://image.tmdb.org/t/p/w342${item.profile_path}`}
                  alt={item.name}
                  width={50}
                  onError={e => {
                    e.currentTarget.src = imgNotFound;
                  }}
                />
                <br />
                {item.name}
              </li>
            );
          })
        ) : (
          <p>Nothing</p>
        )}
      </ul>
    </div>
  );
};
export default Cast;
