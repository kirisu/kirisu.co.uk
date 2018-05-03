// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class App extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href={`${ASSET_PREFIX}/_next/static/style.css`}
          />
          <link
            rel="icon"
            href={`${ASSET_PREFIX}/static/assets/favicon.ico`}
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
