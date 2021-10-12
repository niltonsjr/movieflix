import { render, screen } from "@testing-library/react";
import UserReview from "..";

test("UserReview should render review text and username.", () => {
  const review = "This is the user review";
  const userName = "Ana Blanco";
  const altImageText = "estrela";

  render(<UserReview text={review} userName={userName} />);

  expect(screen.getByText(review)).toBeInTheDocument();
  expect(screen.getByText(userName)).toBeInTheDocument();
  expect(screen.getByTestId("star")).toBeInTheDocument();
});
