import { Controller, useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import Select from 'react-select';
import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenre, setSelectGenre] = useState<Genre[]>([]);
  const { control, setValue, getValues } = useForm<MovieFilterData>();

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

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);
    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };
    onSubmitFilter(obj);
  };

  return (
    <div className="row catalog-filter-container base-card">
      <form>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              options={selectGenre}
              classNamePrefix="catalog-filter-container"
              placeholder="Género"
              isClearable
              onChange={(value) => handleChangeGenre(value as Genre)}
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default MovieFilter;
