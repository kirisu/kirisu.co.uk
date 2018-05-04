import { Component } from 'react';

export default class ContactForm extends Component {
  render() {
    return (
      <div className="card">
        <div class="card-content">
          <div class="content">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">From</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="me@example.com"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Message</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <textarea class="textarea" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="card-footer" />
      </div>
    );
  }
}
