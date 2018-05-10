import React from 'react';
import Head from 'next/head';

import './application.scss';

export default ({ children, title = '' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    <div id="root-modal" />
  </>
);
