import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Intro, News } from 'components/news';

export default ({ data }) => {

    console.log(data)

    return (
        <Layout>
            <SEO />
            <Intro />
        </Layout>);
};