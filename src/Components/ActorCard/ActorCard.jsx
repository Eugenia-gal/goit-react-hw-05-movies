import s from './ActorCard.module.css';

function ActorCard({ actor }) {
  return (
    <li className={s.info} key={actor.id}>
      <img src={actor.poster} alt={actor.name} width={150} />
      {actor.name}
      <p>{`Character: ${actor.character}`}</p>
    </li>
  );
}

export default ActorCard;
