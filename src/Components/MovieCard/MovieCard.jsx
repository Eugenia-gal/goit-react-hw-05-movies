import s from './MovieCard.module.css';

function MovieCard({ movie }) {
  return (
    <div className={s.thumb}>
      <img src={movie.poster} alt={movie.title} className={s.image} />
      <div className={s.info}>
        <h2>{`${movie.title}(${movie.release})`}</h2>
        <p>{`User Score: ${Math.floor((movie.vote * 100) / 10)} %`}</p>
        <h3>Overview</h3>
        <p>{movie.about}</p>
        <h3>Genres</h3>
        {movie.genres.map((genre, index) => (
          <span key={index} className={s.genre}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
