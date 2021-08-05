import PropTypes from 'prop-types';
import s from './ActorCard.module.css';

function ActorCard({ actor }) {
  return (
    <li className={s.info}>
      <img src={actor.poster} alt={actor.name} width={150} />
      {actor.name}
      <p>{`Character: ${actor.character}`}</p>
    </li>
  );
}

ActorCard.propTypes = {
  actor: PropTypes.shape({
    poster: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
  }),
};

export default ActorCard;
