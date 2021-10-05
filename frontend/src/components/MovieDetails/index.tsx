import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie?: Movie;
};

const MovieDetails = ({ movie }: Props) => {
  return (
    <div className="base-card details-card-container">
      <div className="details-image-container">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="details-content-container">
        <h1>{movie?.title}</h1>
        <h2>{movie?.year}</h2>
        <p>{movie?.subTitle}</p>
        <div className="details-description-container">
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
