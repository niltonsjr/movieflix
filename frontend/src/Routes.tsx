import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import MovieCatalog from 'pages/MovieCatalog';
import MovieDescription from 'pages/MovieDescription';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
      <Redirect from="/" to="/auth/login" exact />
      <Auth />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDescription />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
