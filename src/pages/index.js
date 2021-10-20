import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from 'components/common';
import { Intro, News, Companies, Thumbnail, Seminars, Videos, Nasa } from 'components/landing';
import { Header } from 'components/theme';
import { companies, online, long, short, videos } from 'data/data';

export default ({ data }) => (
  <Layout>
    <SEO />
    <Header />
    <Thumbnail />
    <Intro />
    <Nasa />
    <Seminars long={long} short={short} online={online} />
    <News title="News" data={data.allMarkdownRemark.edges} />
    <Companies logos={companies} />
    {/* <Testimonials data={testimonials} /> */}
    <Videos data={videos} />
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2
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
