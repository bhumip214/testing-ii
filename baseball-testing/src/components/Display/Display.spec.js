import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display />", () => {
  it("should render the correct count of strikes and balls", () => {
    const { getByText } = render(<Display strikes={1} balls={2} />);

    expect(getByText(/strikes: 1/i)).toBeInTheDocument();
    expect(getByText(/balls: 2/i)).toBeInTheDocument();
  });
});
