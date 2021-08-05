import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  useRouteMatch,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import MoviesApiService from 'Services/moviesAPI';
import { getPosterModal } from 'Services/get-poster';
import MovieCard from '../MovieCard';
import MovieCast from './Cast';
import MovieCardExtend from 'Components/MovieCardExtend';
import MovieReviews from './Reviews';
import Button from 'Components/Button';

const moviesApiService = new MoviesApiService();

function MovieDetailsPage() {
  const routerState = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (location.state) {
      routerState.current = location.state;
    }
  }, [location.state]);

  const handleClick = () => {
    if (!routerState.current) {
      history.push('/');
    }
    history.push(routerState.current);
  };
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
      <Button onClick={handleClick} />
      {movie && (
        <>
          <MovieCard movie={movie} />
          <MovieCardExtend url={url} />
        </>
      )}

      <Switch>
        <Route path={`${path}/cast`}>
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
