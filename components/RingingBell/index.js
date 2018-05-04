import React, { Component } from 'react';

export default class RingingBell extends Component {
  state = {
    angles: [0, 315, 0, 45]
  };

  tick = () => {
    this.timer = setTimeout(() => {
      this.setState({
        angles: [
          ...this.state.angles.slice(1, this.state.angles.length),
          this.state.angles[0]
        ]
      });
      this.tick();
    }, 500);
  };

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
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
