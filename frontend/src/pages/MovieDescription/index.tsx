import MovieDetails from 'components/MovieDetails';
import UserReview from 'components/UserReview';

import './styles.css';

const MovieDescription = () => {
  return (
    <div className="container my-4">
      <div className="movie-description-container">
        <MovieDetails />
      </div>
      <div className="movie-review-container base-card">
        <input type="text" placeholder="Deixe sua avaliação aqui" />
        <button className="btn btn-primary" type="button">
          SALVAR AVALIAÇÃO
        </button>
      </div>
      <div className="movie-reviewlist-container base-card">
        <UserReview />
        <UserReview />
        <UserReview />    
      </div>
    </div>
  );
};

export default MovieDescription;
