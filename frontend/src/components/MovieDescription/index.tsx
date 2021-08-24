import MovieCard from 'components/MovieCard';
import UserReview from 'components/UserReview';

import './styles.css';

const MovieDescription = () => {
  return (
    <div className="container">
      <div className="movie-description-container">
        <MovieCard />
      </div>
      <div className="movie-review-container base-card">
        <input type="text" placeholder="Deixe sua avaliação aqui" />
        <button className="btn btn-primary" type="button">
          SALVAR AVALIAÇÃO
        </button>
      </div>
      <div className="movie-reviewlist-container base-card">
        <UserReview />
      </div>
    </div>
  );
};

export default MovieDescription;
