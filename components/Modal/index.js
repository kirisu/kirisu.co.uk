import { Component } from 'react';

export default class Modal extends Component {
  render() {
    return this.props.open ? (
      <div className="modal is-active">
        <div className="modal-background" />
        <div role="dialog" className="modal-content">
          {this.props.children}
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.props.onClose}
        />
      </div>
    ) : null;
  }
}
