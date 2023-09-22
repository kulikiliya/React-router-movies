import { useHTTP } from 'components/hooks/useHTTP';
import { getReviews } from 'components/service/api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const { data } = useHTTP(getReviews, id);

  return (
    <div>
      <ul>
        {data.length ? (
          data?.map(item => (
            <li key={item.id}>
              <h2>{item.author}</h2>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>Nothing</p>
        )}
      </ul>
    </div>
  );
};
export default Reviews;
