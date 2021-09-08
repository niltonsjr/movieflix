import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'pages/Auth/Login';

import { Route, Switch } from 'react-router-dom';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container container-fluid">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>
          Diga o que você achou do seu <br /> filme favorito
        </p>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>          
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
