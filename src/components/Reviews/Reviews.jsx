import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f47740ae2875f781102cfee99d21c1c4`
        );
        setReview(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [id]);

  console.log(review);

  return (
    <div>
      <ul>
        {review.length ? (
          review?.map(item => (
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
