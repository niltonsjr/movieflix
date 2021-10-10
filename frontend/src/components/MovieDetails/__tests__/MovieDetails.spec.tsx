import { render, screen } from "@testing-library/react";
import { Movie } from "types/movie";
import MovieDetails from "..";

test("MovieDetails should render card with given movie", () => {
  const movie: Movie = {
    title: "The Movie",
    year: "2021",
    imgUrl: "http://themovie.com",
    subTitle: "This is the movie subtitle.",
    synopsis: "The movie synopsis is here.",
  } as Movie;

  render(<MovieDetails movie={movie} />);

  expect(screen.getByText(movie.title)).toBeInTheDocument();
  expect(screen.getByAltText(movie.title)).toBeInTheDocument();
  expect(screen.getByText(movie.year)).toBeInTheDocument();
  expect(screen.getByText(movie.subTitle)).toBeInTheDocument();
  expect(screen.getByText(movie.synopsis)).toBeInTheDocument();
});
