import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { News } from 'components/news';

export default ({ data }) => (
  <Layout>
    <SEO />
    <News title="News" data={data.allMarkdownRemark.edges} />
  </Layout>
);

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { template: { eq: "news" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
