import React from 'react';
import Head from 'next/head';

import './application.scss';

export default ({ children, title = '' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="//cdn.materialdesignicons.com/2.3.54/css/materialdesignicons.min.css"
      />
    </Head>
    {children}
    <div id="root-modal" />
  </>
);
