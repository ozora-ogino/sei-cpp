import React from "react"
import { graphql } from "gatsby"
import { Header } from 'components/theme';
import { Layout, SEO, Card } from 'components/common';
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  align-contetns: center;
  vertical-align: middle;
  margin: 3rem auto;
  max-width: 90%;
   h1 {
     color: var(--primary)
   }

   h2 {
     color: var(--primary-light)
   }

`;
export default function NewsPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO />
      <Header />
      <Wrapper>
        <Card pad='4rem'>
          <h1>{post.frontmatter.title}</h1>
          <p style={{ marginBottom: '3rem' }}>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Card>
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
