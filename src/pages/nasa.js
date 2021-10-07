import React from 'react';

import { Layout, SEO } from 'components/common';
import { Header } from 'components/theme';
import { Intro, Examples } from 'components/nasa';

export default () => (
  <Layout>
    <SEO />
    <Header />
    <Intro />
  </Layout>
);
