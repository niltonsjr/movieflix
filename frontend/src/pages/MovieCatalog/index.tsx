import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import './styles.css';

const MovieCatalog = () => {
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
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/movies/1">
            <MovieCard />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/movies/1">
            <MovieCard />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/movies/1">
            <MovieCard />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/movies/1">
            <MovieCard />
          </Link>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default MovieCatalog;
