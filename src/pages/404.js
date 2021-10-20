import React from 'react';
import { Layout, SEO } from 'components/common';
import { Content } from 'components/404';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Content />
  </Layout>
);
