import axios from 'axios';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL } from 'util/requests';
import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/movies`,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-filter-container base-card">
        <form>
          <select id="movies" name="movies">
            <option value="aventura">Aventura</option>
            <option value="comedia">Comedia</option>
            <option value="accion">Acción</option>
            <option value="drama">Drama</option>
          </select>
        </form>
      </div>
      <div className="row catalog-movies-container">
        {page?.content.map((movie) => {
          return (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to="/movies/1">
                <MovieCard />
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
