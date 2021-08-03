import { Route } from 'react-router-dom';
import './App.css';
import Container from 'Components/Container';
import AppBar from 'Components/AppBar/AppBar';
import HomePage from 'Components/pages/HomePage';
import MoviesPage from 'Components/pages/MoviesPage';

function App() {
  return (
    <Container>
      <AppBar />

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/movies">
        <MoviesPage />
      </Route>
    </Container>
  );
}

export default App;
