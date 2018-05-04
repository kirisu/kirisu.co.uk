import { Component } from 'react';

export default class ContactForm extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">From</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="me@example.com"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Message</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer" />
      </div>
    );
  }
}
