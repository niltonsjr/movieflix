import { AxiosRequestConfig } from 'axios';
import MovieDetails from 'components/MovieDetails';
import UserReview from 'components/UserReview';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { getTokenData, hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';

import './styles.css';
import { Review } from 'types/review';

type UrlParams = {
  movieId: string;
};

const MovieDescription = () => {
  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie>();

  const [review, setReview] = useState<Review[]>([]);

  useEffect(() => {
    const params1: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params1).then((response) => {
      setMovie(response.data);
    });

    const params2: AxiosRequestConfig = {
      method: 'GET',
      url: `/reviews/${movieId}`,
      withCredentials: true,
    };
    requestBackend(params2).then((response) => {
      setReview(response.data);
    });
    
  }, [movieId]);

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data: {
        id: getTokenData(),
        movieId: 2,
        text: 'This is one of my favourite films but I have ....',
      },
    };

    requestBackend(params)
      .then((response) => {
        console.log('sucesso', response);
      })
      .catch((error) => {
        console.log('erro', error);
      });
  };

  return (
    <div className="container my-4">
      <div className="movie-description-container">
        <MovieDetails movie={movie} />
      </div>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div className="movie-review-container base-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('review')}
              type="text"
              placeholder="Deixe sua avaliação aqui"
              name="review"
            />
            <button className="btn btn-primary" type="submit">
              SALVAR AVALIAÇÃO
            </button>
          </form>
        </div>
      )}

      <div className="movie-reviewlist-container base-card">
        {review.map((review) => {
          return <UserReview text={review.text} userName={review.user.name} />;
        })}
      </div>
    </div>
  );
};

export default MovieDescription;
