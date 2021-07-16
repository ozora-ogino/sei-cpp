
import React from 'react';
import { Layout, SEO } from 'components/common';
import { Global } from 'style/global';
import { Contact } from 'components/contact'


export default () => {

  return (
    <Global>
      <Layout>
        <SEO />
        <Contact />
      </Layout>
    </Global>
  );
};
