import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuthData, requestBackendLogin, saveAuthData } from 'util/requests';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
    .then((response) => {
      saveAuthData(response.data);
      const token = getAuthData().access_token;
      console.log('sucesso', response);
      console.log('token gerado: ' + token);
    })
    .catch((error) => {
      console.log('Erro', error);
    });
  };

  return (
    <div className="login-container container-fluid">
      <div className="login-card-container base-card">
        <h1>LOGIN</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form-container"
        >
          <input
            {...register('username', {
              required: "Campo obrigatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
            type="text"
            name="username"
            placeholder="Email"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
          <input
            {...register('password', {
              required: "Campo obrigatorio"
            })}
            type="password"
            name="password"
            placeholder="Senha"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback d-block">{errors.password?.message}</div>
          <Link to="/movies">
            <button className="btn btn-primary" type="submit">
              FAZER LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
