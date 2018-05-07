// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class App extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href={`${SITE_ROOT}/_next/static/style.css`} />
          <link
            rel="icon"
            href={`${SITE_ROOT}/static/assets/favicon.ico`}
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
