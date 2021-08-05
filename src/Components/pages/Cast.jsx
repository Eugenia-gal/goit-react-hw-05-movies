import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MoviesApiService from '../../Services/moviesAPI';
import { getPoster } from 'Services/get-poster';
import ActorCard from 'Components/ActorCard';

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
        {cast && cast.map(actor => <ActorCard actor={actor} key={actor.id} />)}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  selectedMovieId: PropTypes.string,
};

export default MovieCast;
