import s from './ReviewCard.module.css';

function ReviewCard({ review }) {
  return (
    <li className={s.card} key={review.id}>
      <h3>{`Author: ${review.author}`}</h3>
      <p>{review.content}</p>
    </li>
  );
}

export default ReviewCard;
