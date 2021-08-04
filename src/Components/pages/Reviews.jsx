import { useState, useEffect } from 'react';
import MoviesApiService from '../../Services/moviesAPI';
import s from './Reviews.module.css';

const moviesApiService = new MoviesApiService();

function MovieReviews({ selectedMovieId }) {
  const [reviews, setReviews] = useState(null);
  const isEmpty = reviews && reviews.length === 0;

  useEffect(() => {
    if (selectedMovieId) {
      moviesApiService
        .fetchMovieReviews(selectedMovieId)
        .then(reviews => {
          return reviews.map(review => ({
            author: review.author,
            content: review.content,
            id: review.id,
          }));
        })
        .then(reviews => {
          setReviews(reviews);
        });
    }
  }, [selectedMovieId]);

  return (
    <div className={s.wrapper}>
      {isEmpty && <strong>We don't have any reviews for this movie</strong>}

      <ul>
        {reviews &&
          reviews.map(review => (
            <li className={s.card} key={review.id}>
              <h3>{`Author: ${review.author}`}</h3>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
