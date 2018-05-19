import React, { Component } from 'react';

const FPS = 30;
const INTERVAL = 1000 / FPS;
const INITIAL_NOW = Date.now();
const ANGLES = [0, 315, 0, 45];

export default class RingingBell extends Component {
  state = {
    angle: ANGLES[0],
    then: INITIAL_NOW
  };

  tick = () => {
    cancelAnimationFrame(this.timer);
    this.timer = requestAnimationFrame(this.tick);
    const now = Date.now();
    const delta = now - this.state.then;

    if (delta > INTERVAL) {
      this.setState({
        angle: ANGLES[parseInt((this.state.then - INITIAL_NOW) / 500) % 4],
        then: now - delta % INTERVAL
      });
    }
  };

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.timer);
  }

  render() {
    return (
      <span className="icon">
        <i
          className={`mdi mdi-bell-ring-outline mdi-rotate-${this.state.angle}`}
        />
      </span>
    );
  }
}
