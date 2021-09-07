import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from 'types/movie';
import { BASE_URL } from 'util/requests';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

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
