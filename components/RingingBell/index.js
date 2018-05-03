import React, { Component } from 'react';

export default class RingingBell extends Component {
  state = {
    angles: [0, 315, 0, 45]
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        angles: [
          ...this.state.angles.slice(1, this.state.angles.length),
          this.state.angles[0]
        ]
      });
    }, Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now());
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
