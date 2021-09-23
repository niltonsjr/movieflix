import { AxiosRequestConfig } from 'axios';
import MovieDetails from 'components/MovieDetails';
import UserReview from 'components/UserReview';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';
import { Review } from 'types/review';
import { useContext } from 'react';
import { AuthContext } from 'AuthContext';

import './styles.css';

type UrlParams = {
  movieId: string;
};

type FormData = {
  reviewText: string;
};

const MovieDescription = () => {
  const { authContextData } = useContext(AuthContext);
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState<Review[]>([]);
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    const params1: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params1)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log('Erro en get movies', error);
      });

    const params2: AxiosRequestConfig = {
      method: 'GET',
      url: `/reviews/${movieId}`,
      withCredentials: true,
    };
    
    requestBackend(params2)
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.log('Erro en get reviews', error);
      });
  }, [movieId, review]);

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data: {
        id: authContextData.tokenData?.userId,
        movieId: movieId,
        text: formData.reviewText,
      },
    };

    requestBackend(params)
      .then((response) => {
        console.log('sucesso', response);
        reset({});
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

      { hasAnyRoles(['ROLE_MEMBER']) && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="movie-review-container base-card">
            <input
              {...register('reviewText')}
              type="text"
              placeholder="Deixe sua avaliação aqui"
              name="reviewText"
            />
            <button className="form-btn btn btn-primary" type="submit">
              SALVAR AVALIAÇÃO
            </button>
          </div>
        </form>
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
