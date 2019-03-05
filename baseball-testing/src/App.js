import React, { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Display from "./components/Display/Display";
import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  };

  render() {
    return (
      <div className="App">
        <Dashboard />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;
