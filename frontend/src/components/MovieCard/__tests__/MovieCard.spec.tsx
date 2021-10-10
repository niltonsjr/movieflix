import { render, screen } from "@testing-library/react";
import { Movie } from "types/movie";
import MovieCard from "..";

test("MovieCard should render card with given movie", () => {
    const movie : Movie = {
        title: "The Movie",
        year: '2021',
        imgUrl: 'http://themovie.com',
        subTitle: 'This is the movie subtitle'        
    } as Movie;

    render(
        <MovieCard movie={movie} />
    );

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.year)).toBeInTheDocument();
    expect(screen.getByText(movie.subTitle)).toBeInTheDocument();
});