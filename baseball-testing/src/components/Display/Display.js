import React from "react";

function Display(props) {
  return (
    <div>
      <h3>Counts for At Bat</h3>
      <p> Strikes: {props.strikes}</p>
      <p> Balls: {props.balls}</p>
    </div>
  );
}

export default Display;
