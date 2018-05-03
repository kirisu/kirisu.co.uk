import { PureComponent } from 'react';

export default class RingingBell extends PureComponent {
  // static getIntialProps() {
  //   return {
  //     angles: [0, 315, 0, 45]
  //   };
  // }

  state = {
    current: 0,
    angles: [0, 315, 0, 45]
  };

  componentWillMount() {
    this.timer = setTimeout(() => {
      this.setState({
        current: this.state.angles.slice(0, 1),
        angles: [
          ...this.state.angles.slice(1, this.state.angles.length),
          ...this.state.angles.slice(0, 1)
        ]
      });
      this.componentWillMount();
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
            this.state.current
          }`}
        />
      </span>
    );
  }
}
