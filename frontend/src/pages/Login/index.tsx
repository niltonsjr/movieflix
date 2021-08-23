import './styles.css';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container container-fluid">
      <div className="login-content-container">
        <h1>Avalie Filmes</h1>
        <p>
          Diga o que você achou do seu <br /> filme favorito
        </p>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="login-card-container base-card">
        <h1>LOGIN</h1>
        <form className="login-form-container">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <Link to="/movies">
            <button className="btn btn-primary" type="button">
              FAZER LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
