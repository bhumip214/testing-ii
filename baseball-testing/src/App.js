import React, { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Display from "./components/Display/Display";
import "./App.css";

class App extends Component {
  state = {
    strikes: 0,
    balls: 0
  };

  reset = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  handleStrike = event => {
    event.preventDefault();

    if (this.state.strikes === 2) {
      this.reset();
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  handleBall = () => {
    if (this.state.balls === 3) {
      this.reset();
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  handleFoul = () => {
    if (this.state.strikes === 0 || this.state.strikes === 1) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else if (this.state.strikes === 2) {
      this.setState({ strikes: this.state.strikes });
    }
  };

  handleHit = () => {
    this.reset();
  };

  render() {
    return (
      <div className="App">
        <Dashboard
          handleStrike={this.handleStrike}
          handleBall={this.handleBall}
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
        />
        <Display balls={this.state.balls} strikes={this.state.strikes} />
      </div>
    );
  }
}

export default App;
