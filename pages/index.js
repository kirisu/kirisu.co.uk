import React from 'react';

import Application from '../layouts/application';

export default () => (
  <Application title="@kirisu">
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-3">
            <a href="https://github.com/kirisu">@kirisu</a>
          </h3>
          <h4 className="subtitle is-4 has-text-grey-light">
            Christopher Lunt is a Software Engineer based in Glasgow, Scotland.
          </h4>
        </div>
      </div>
    </section>
  </Application>
);
