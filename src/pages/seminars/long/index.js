import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';

export default ({ data }) => {

    console.log(data)

    return (
        <Layout>
            <SEO />
        </Layout>);
};