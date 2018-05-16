import React, { Component } from 'react';

import moveArrayItemFirstToLast from '../../helpers/moveArrayItemFirstToLast';

const INTERVAL = 250;
const INITIAL_NOW = Date.now();

export default class RingingBell extends Component {
  state = {
    angles: [0, 315, 0, 45],
    then: INITIAL_NOW,
    now: INITIAL_NOW
  };

  tick = () => {
    const timer = requestAnimationFrame(this.tick);
    const now = Date.now();

    this.setState({
      timer,
      now,
      delta: now - this.state.then
    });

    if (this.state.delta > INTERVAL) {
      this.setState({
        then: this.state.now - this.state.delta % INTERVAL,
        angles: moveArrayItemFirstToLast(this.state.angles)
      });
    }
  };

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearAnimationFrame(this.state.timer);
  }

  render() {
    return (
      <span className="icon">
        <i
          className={`mdi mdi-bell-ring-outline mdi-rotate-${
            this.state.angles[0]
          }`}
        />
      </span>
    );
  }
}
