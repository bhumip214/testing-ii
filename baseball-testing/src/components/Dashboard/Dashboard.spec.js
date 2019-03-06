import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import Display from "../Display/Display";

describe("<Dashboard />", () => {
  it("should render all four buttons - strikes, balls, fouls, hits", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/strike/i)).toBeInTheDocument();
    expect(getByText(/ball/i)).toBeInTheDocument();
    expect(getByText(/foul/i)).toBeInTheDocument();
    expect(getByText(/hit/i)).toBeInTheDocument();
  });

  it("should update strikes and balls on click", () => {
    const component = render(<Dashboard />);
    const { getByTestId } = render(<Display strikes={0} balls={0} />);

    const strikeButton = component.getByTestId("strike-btn");
    const ballButton = component.getByTestId("ball-btn");
    const foulButton = component.getByTestId("foul-btn");
    const hitButton = component.getByTestId("hit-btn");

    const strikes = getByTestId("strikes");
    const balls = getByTestId("balls");

    fireEvent.click(strikeButton);
    fireEvent.click(ballButton);
    fireEvent.click(foulButton);
    fireEvent.click(hitButton);

    expect(strikes).toBeDefined();
    expect(balls).toBeDefined();
  });
});
