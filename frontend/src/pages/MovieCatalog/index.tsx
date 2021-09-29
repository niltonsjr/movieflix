import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 6,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [
    controlComponentsData.activePage,
    controlComponentsData.filterData.genre?.id,
  ]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  return (
    <div className="container my-4 catalog-container">
      <MovieFilter onSubmitFilter={handleSubmitFilter} />

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

      <Pagination
        forcePage={page?.number}
        pageCount={page ? page?.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default MovieCatalog;
