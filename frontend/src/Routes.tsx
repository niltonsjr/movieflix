import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import MovieCatalog from 'pages/MovieCatalog';
import MovieDescription from 'pages/MovieDescription';
import { Redirect } from 'react-router-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>    
    <Redirect from="/" to="/auth/login" exact />   
      <Route path="/" exact>
        <Auth />
      </Route>  
      <Redirect from="/auth" to="/auth/login" exact /> 
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
  </BrowserRouter>
);

export default Routes;
