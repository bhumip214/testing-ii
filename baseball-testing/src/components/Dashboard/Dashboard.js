import React from "react";

function Dashboard(props) {
  return (
    <div>
      <h3> Dashboard</h3>
      <button onClick={props.handleStrike} data-testid="strike-btn">
        Strike
      </button>
      <button onClick={props.handleBall} data-testid="ball-btn">
        Ball
      </button>
      <button onClick={props.handleFoul} data-testid="foul-btn">
        Foul
      </button>
      <button onClick={props.handleHit} data-testid="hit-btn">
        Hit
      </button>
    </div>
  );
}

export default Dashboard;
