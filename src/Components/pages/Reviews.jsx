import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from 'Components/ReviewCard';
import MoviesApiService from '../../Services/moviesAPI';

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
    <div>
      {isEmpty && <strong>We don't have any reviews for this movie</strong>}

      <ul>
        {reviews &&
          reviews.map(review => <ReviewCard review={review} key={review.id} />)}
      </ul>
    </div>
  );
}

MovieReviews.propTypes = {
  selectedMovieId: PropTypes.string,
};

export default MovieReviews;
