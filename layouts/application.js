import React from 'react';
import Head from 'next/head';

import './application.scss';

export default ({ children, title = '' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </>
);
