import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { useForm, Controller } from 'react-hook-form';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
}

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [selectGenre, setSelectGenre] = useState<Genre[]>([]);

  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    activePage: 0
  })

  const { handleSubmit, control } = useForm<Genre>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/genres/',
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setSelectGenre(response.data);
    });
  }, []);

  const onSubmit = (formData: Genre) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
        genreId: formData.id,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-filter-container base-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Select
            options={selectGenre}
            classNamePrefix="catalog-filter-container"
            placeholder="Género"
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
          />
        </form>
      </div>

      <div className="row catalog-movies-container">
        {page?.content.map((movie) => {
          return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default MovieCatalog;
