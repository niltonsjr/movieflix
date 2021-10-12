import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import MovieCatalog from '..';
import history from 'util/history';
import { server } from './fixtures';

describe('MovieCatalog tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should render Catalog with movies', async () => {
    render(
      <Router history={history}>
        <MovieCatalog />
      </Router>
    );

    expect(screen.getByTestId('catalog')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Emma')).toBeInTheDocument();
    });
  });
});
