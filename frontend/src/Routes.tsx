import Navbar from 'components/Navbar';
import Login from 'pages/Login';
import MovieCatalog from 'pages/MovieCatalog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
