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

const MovieDescription = () => {
  const { authContextData } = useContext(AuthContext);
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Review>();

  useEffect(() => {
    const config1: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config1)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log('Erro en get movies', error);
      });
  }, [movie, movieId]);

  const onSubmit = (formData: Review) => {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data: {
        id: authContextData.tokenData?.userId,
        movieId: movieId,
        text: formData.text,
      },
    };

    requestBackend(config)
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

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="movie-review-container base-card">
            <input
              {...register('text', { required: 'Campo obrigatorio' })}
              type="text"
              placeholder="Deixe sua avaliação aqui"
              name="text"
              className={`form-control base-input ${
                errors.text ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-review-feedback d-block">
              {errors.text?.message}
            </div>
            <button className="form-btn btn btn-primary" type="submit">
              SALVAR AVALIAÇÃO
            </button>
          </div>
        </form>
      )}

      <div className="movie-reviewlist-container base-card">
        {movie?.reviews.map((review) => {
          return (
            <UserReview
              text={review.text}
              userName={review.user.name}
              key={review.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieDescription;
