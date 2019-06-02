import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<App />", () => {
  it("increase strikes when clicked on strike button", () => {
    const { getByTestId } = render(<App />);
    const strikeButton = getByTestId("strike-btn");
    const strikes = getByTestId("strikes");

    fireEvent.click(strikeButton);
    expect(strikes).toHaveTextContent("Strikes: 1");
  });

  it("increase balls when clicked on ball button", () => {
    const { getByTestId } = render(<App />);
    const ballButton = getByTestId("ball-btn");
    const balls = getByTestId("balls");

    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent("Balls: 1");
  });

  it("increase strikes when clicked on foul button", () => {
    const { getByTestId } = render(<App />);
    const foulButton = getByTestId("foul-btn");
    const strikes = getByTestId("strikes");

    fireEvent.click(foulButton);
    expect(strikes).toHaveTextContent("Strikes: 1");
  });

  it("reset strikes and balls to 0 when player reaches 3 strikes", () => {
    const { getByTestId } = render(<App />);

    const strikeButton = getByTestId("strike-btn");
    const strikes = getByTestId("strikes");

    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    expect(strikes).toHaveTextContent("Strikes: 2");

    fireEvent.click(strikeButton);
    expect(strikes).toHaveTextContent("Strikes: 0");
  });

  it("reset strikes and balls to 0 when player reaches 4 balls", () => {
    const { getByTestId } = render(<App />);

    const ballButton = getByTestId("ball-btn");
    const balls = getByTestId("balls");

    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent("Balls: 3");

    fireEvent.click(ballButton);
    expect(balls).toHaveTextContent("Balls: 0");
  });

  it("reset strikes and balls to 0 when clicked on hit button", () => {
    const { getByTestId } = render(<App />);
    const hitButton = getByTestId("hit-btn");
    const strikes = getByTestId("strikes");
    const balls = getByTestId("balls");

    fireEvent.click(hitButton);
    expect(strikes).toHaveTextContent("Strikes: 0");
    expect(balls).toHaveTextContent("Balls: 0");
  });
});
