import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card card-container">
      <div className="image-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="content-container">
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
