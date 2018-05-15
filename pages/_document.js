import Document, { Head, Main, NextScript } from 'next/document';

const FAVICON_URL = `${SITE_ROOT}/static/assets/favicon.ico`;
const APP_CSS_URL = `${SITE_ROOT}/_next/static/style.css`;
const MDI_CSS_URL =
  '//cdn.materialdesignicons.com/2.3.54/css/materialdesignicons.min.css';

export default class App extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href={FAVICON_URL} type="image/x-icon" />
          <link rel="stylesheet" href={APP_CSS_URL} />
          <link rel="stylesheet" href={MDI_CSS_URL} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
