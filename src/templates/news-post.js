import React from "react"
import { graphql } from "gatsby"
import { Header } from 'components/theme';
import { Layout, SEO } from 'components/common';
import styled from 'styled-components';

export const Wrapper = styled.div` 
  text-align: center;
  margin-top: 3rem;
`;
export default function NewsPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO />
      <Header />
      <Wrapper>
        <h1>{post.frontmatter.title}</h1>
        <p style={{ marginBottom: '3rem' }}>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  )
}
export const query = graphql`
  query NewsPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
