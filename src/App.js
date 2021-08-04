import { Route, Switch } from 'react-router-dom';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar/AppBar';
import HomePage from 'Components/pages/HomePage.jsx';
import MoviesPage from 'Components/pages/MoviesPage.jsx';
import MovieDetailsPage from 'Components/pages/MovieDetailsPage';
import NotFoundPage from 'Components/pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path={`/movies/:movieId`}>
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
