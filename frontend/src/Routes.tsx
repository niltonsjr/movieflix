import Navbar from 'components/Navbar';
import Login from 'pages/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
