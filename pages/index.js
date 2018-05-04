import { Component } from 'react';
import Application from '../layouts/application';

import RingingBell from '../components/RingingBell';
import ContactFormModal from '../components/ContactFormModal';

export default class Home extends Component {
  state = {
    showContactForm: false
  };

  toggleContactForm = () => {
    this.setState({
      showContactForm: !this.state.showContactForm
    });
  };

  render() {
    const { showContactForm } = this.state;
    return (
      <Application title="@kirisu">
        <section className="hero is-fullheight is-light">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h3 className="title is-3">@kirisu</h3>
              <h4 className="subtitle is-4 has-text-grey-light">
                Software Engineer based in Glasgow, Scotland.
              </h4>
              <a
                onClick={() => this.toggleContactForm()}
                href="mailto:contact@kirisu.co.uk"
                className="button is-medium is-primary is-outlined is-rounded">
                <RingingBell />
                <span>Contact Me</span>
              </a>
              <ContactFormModal
                open={showContactForm}
                onClose={() => this.toggleContactForm()}
              />
            </div>
          </div>
        </section>
      </Application>
    );
  }
}
