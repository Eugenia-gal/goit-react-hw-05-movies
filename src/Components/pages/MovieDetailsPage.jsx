import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import MoviesApiService from 'Services/moviesAPI';
import { getPosterModal } from 'Services/get-poster';
import MovieCard from '../MovieCard';
import MovieCast from './Cast';
import MovieCardExtend from 'Components/MovieCardExtend';
import MovieReviews from './Reviews';
import Button from 'Components/Button';

const moviesApiService = new MoviesApiService();

function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId) {
      moviesApiService
        .fetchMovieDetails(movieId)
        .then(getPosterModal)
        .then(data => {
          setMovie(data);
        });
    }
  }, [movieId]);

  return (
    <div>
      <Button href={url} />
      {movie && (
        <>
          <MovieCard movie={movie} />
          <MovieCardExtend url={url} />
        </>
      )}
      <Switch>
        <Route path={`${path}/cast`} exact>
          <MovieCast selectedMovieId={movieId} />
        </Route>
        <Route path={`${path}/reviews`}>
          <MovieReviews selectedMovieId={movieId} />
        </Route>
      </Switch>
    </div>
  );
}

export default MovieDetailsPage;
