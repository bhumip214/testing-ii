import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should render all four buttons - strikes, balls, fouls, hits", () => {
    const { getByTestId } = render(<Dashboard />);
    const strikeButton = getByTestId("strike-btn");
    const ballButton = getByTestId("ball-btn");
    const foulButton = getByTestId("foul-btn");
    const hitButton = getByTestId("hit-btn");

    expect(strikeButton).toBeInTheDocument();
    expect(ballButton).toBeInTheDocument();
    expect(foulButton).toBeInTheDocument();
    expect(hitButton).toBeInTheDocument();
  });
});
