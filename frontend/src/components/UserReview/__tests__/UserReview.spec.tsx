import { render, screen } from "@testing-library/react";
import UserReview from "..";

test("MovieDetails should render card with given movie", () => {
  const review = "This is the user review";
  const userName = "Ana Blanco";
  const altImageText = "estrela";

  render(<UserReview text={review} userName={userName} />);

  expect(screen.getByText(review)).toBeInTheDocument();
  expect(screen.getByText(userName)).toBeInTheDocument();
  expect(screen.getByAltText(altImageText)).toBeInTheDocument();
});
