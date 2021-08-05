import PropTypes from 'prop-types';
import s from './ReviewCard.module.css';

function ReviewCard({ review }) {
  return (
    <li className={s.card}>
      <h3>{`Author: ${review.author}`}</h3>
      <p>{review.content}</p>
    </li>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default ReviewCard;
