import './styles.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container container-fluid">
      <div className="login-card-container base-card">
        <h1>LOGIN</h1>
        <form className="login-form-container">
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Senha" />
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
