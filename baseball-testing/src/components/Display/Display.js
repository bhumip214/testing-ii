import React from "react";

function Display(props) {
  return (
    <div>
      <h3>Counts for At Bat</h3>
      <p> Balls: {props.balls}</p>
      <p> Strikes: {props.strikes}</p>
    </div>
  );
}

export default Display;
