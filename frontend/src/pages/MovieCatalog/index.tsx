import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import Select from 'react-select';
import './styles.css';
import { Genre } from 'types/genre';


const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

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
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-filter-container base-card">
        <form>
          <Select 
            options={selectGenres}
            classNamePrefix="catalog-filter-container"
            placeholder="Género"
            isMulti
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
                <MovieCard movie={movie}/>
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
