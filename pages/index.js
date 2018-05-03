import Application from '../layouts/application';
import RingingBell from '../components/RingingBell';

export default () => (
  <Application title="@kirisu">
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-3">@kirisu</h3>
          <h4 className="subtitle is-4 has-text-grey-light">
            Christopher Lunt is a Software Engineer based in Glasgow, Scotland.
          </h4>
          <a
            href="mailto:contact@kirisu.co.uk"
            className="button is-medium is-primary is-outlined is-rounded">
            <RingingBell />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  </Application>
);
