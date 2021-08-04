import { useState, useEffect } from 'react';
import MoviesApiService from '../../Services/moviesAPI';
import { getPoster } from 'Services/get-poster';
import s from './Cast.module.css';

const moviesApiService = new MoviesApiService();

function MovieCast({ selectedMovieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (selectedMovieId) {
      moviesApiService
        .fetchMovieCast(selectedMovieId)
        .then(cast =>
          cast.map(actor => ({
            name: actor.name,
            character: actor.character,
            profile_path: actor.profile_path,
            id: actor.id,
          })),
        )
        .then(getPoster)
        .then(cast => {
          setCast(cast);
        });
    }
  }, [selectedMovieId]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(actor => (
            <li className={s.info} key={actor.id}>
              <img src={actor.poster} alt={actor.name} width={150} />
              {actor.name}
              <p>{`Character: ${actor.character}`}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MovieCast;
