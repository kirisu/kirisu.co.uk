import { PureComponent } from 'react';

export default class RingingBell extends PureComponent {
  static async getIntialProps() {
    return {
      angles: [0, 315, 0, 45]
    };
  }

  state = {
    angles: this.props.angles
  };

  componentWillMount() {
    this.timer = setTimeout(() => {
      this.setState({
        angles: [
          ...this.state.angles.slice(1, this.state.angles.length),
          this.state.angles[0]
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
            this.state.angles[0]
          }`}
        />
      </span>
    );
  }
}
