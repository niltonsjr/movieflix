import './styles.css';
import movieImage from 'assets/images/movie-image.png';
const MovieCard = () => {
  return (
    <div className="base-card card-container">
      <div className="image-container">
        <img src={movieImage} alt="portada" />
      </div>
      <div className="content-container">
        <h1>O Retorno do Rei</h1>
        <h2>2013</h2>
        <p>O olho do inimigo está se movendo.</p>
        <div className="description-container">
        <p>
          O confronto final entre as forças do bem e do mal que lutam pelo
          controle do futuro da Terra Média se aproxima. Sauron planeja um
          grande ataque a Minas Tirith, capital de Gondor, o que faz com que
          Gandalf e Pippin partam para o local na intenção de ajudar a
          resistência. Um exército é reunido por Theoden em Rohan, em mais uma
          tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e
          Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o
          anel.
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default MovieCard;
