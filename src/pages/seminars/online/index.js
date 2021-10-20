import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Details } from 'components/seminar/online';
import { onlineSeminarExamples } from 'data/data';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Details data={onlineSeminarExamples} />
  </Layout>
);
