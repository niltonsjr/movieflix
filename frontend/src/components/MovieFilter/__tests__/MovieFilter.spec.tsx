import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import history from 'util/history';
import MovieFilter from '..';
import { server } from './fixtures';
import selectEvent from 'react-select-event';

describe('MovieFilter tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should render Select Form with genres', async () => {
    const onSubmitFilter = jest.fn();

    render(
      <Router history={history}>
        <MovieFilter onSubmitFilter={onSubmitFilter} />
      </Router>
    );

    const genreInput = screen.getByLabelText('Género');
  });

  test('when select an option it should be displayed on the page', async () => {
    const onSubmitFilter = jest.fn();

    render(
      <Router history={history}>
        <MovieFilter onSubmitFilter={onSubmitFilter} />
      </Router>
    );

    const genreInput = screen.getByLabelText('Género');
    await selectEvent.select(genreInput, 'Horror');
    expect(screen.getByText('Horror')).toBeInTheDocument;
  });

  test('when select an option, should call onSubmitFilter', async () => {
    const onSubmitFilter = jest.fn();

    render(
      <Router history={history}>
        <MovieFilter onSubmitFilter={onSubmitFilter} />
      </Router>
    );

    const genreInput = screen.getByLabelText('Género');
    await selectEvent.select(genreInput, 'Horror');
    expect(onSubmitFilter).toHaveBeenCalledWith({
      genre: { id: 2, name: 'Horror' },
    });
  });
});
