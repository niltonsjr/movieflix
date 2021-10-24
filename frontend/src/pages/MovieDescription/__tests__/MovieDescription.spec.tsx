import { render, screen, waitFor } from '@testing-library/react';
import { Router, useParams } from 'react-router-dom';
import history from 'util/history';
import MovieDescription from '..';
import { server } from './fixtures';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('MovieDescription tests', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ movieId: 1 });
  });
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should render MovieDescription', async () => {
    render(
      <Router history={history}>
        <MovieDescription />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Home Alone')).toBeInTheDocument();
      screen.queryAllByTestId('star');
    });
  });
});
