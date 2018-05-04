import { Component } from 'react';
import ReactDOM from 'react-dom';

import Modal from '../Modal';
import ContactForm from '../ContactForm';

export default class ContactFormModal extends Component {
  constructor(props) {
    super(props);

    this.isBrowser = typeof document === 'object';

    this.rootSelector = this.isBrowser
      ? document.getElementById('root-modal')
      : '';
    this.container = this.isBrowser ? document.createElement('div') : '';
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    if (!this.isBrowser) return null;

    return ReactDOM.createPortal(
      <Modal {...this.props}>
        <ContactForm />
      </Modal>,
      this.container
    );
  }
}
