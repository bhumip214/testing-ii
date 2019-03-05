import React from "react";

function Dashboard(props) {
  return (
    <div>
      <h3> Dashboard</h3>
      <button onClick={props.handleStrike}> Strike</button>
      <button onClick={props.handleBall}> Ball</button>
      <button onClick={props.handleFoul}> Foul</button>
      <button onClick={props.handleHit}> Hit</button>
    </div>
  );
}

export default Dashboard;
