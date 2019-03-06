import React from "react";

function Display(props) {
  return (
    <div>
      <h3>Counts for At Bat</h3>
      <p data-testid="strikes"> Strikes: {props.strikes} </p>
      <p data-testid="balls"> Balls: {props.balls}</p>
    </div>
  );
}

export default Display;
