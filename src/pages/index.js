import React from 'react';
// import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Intro, Courses, News, Companies } from 'components/landing';
import google from 'assets/company-logos/google.png'
import ms from 'assets/company-logos/ms.jpg'

export default ({ data }) => {

  console.log(data)

  const contributions = [
    { owner: "ethereum", name: "ethereum-org-website" },
    { owner: "tensorflow", name: "docs" },
  ]

  const companies = [
    { img: google, size: "100" },
    { img: ms, size: "240" },
  ]

  const projects = [
    {
      name: '2021年春季セミナー',
      description: '2021/5/11-12の二日間Zoomで春季セミナーを行いました。',
      to: "/",
    },
    {
      name: '2021年参加者メンバーに向けて',
      description: '2021年参加者メンバーに向への連絡事項',
      to: "/",
    },
  ]

  const courses = [
    {
      name: '短期セミナー',
      long: '約10日間',
      description: 'カリフォルニアにて短期間でGlobalなビジネスアナリシス人材を育成します。',
      to: "/",
    },
    {
      name: '長期セミナー',
      long: '約２ヶ月間',
      description: 'カリフォルニアで長期の育成セミナーをします。週末にはGoogleやAmazonなどの企業訪問もあります。',
      to: "/",
    },
  ]
  return (
    <Layout>
      <SEO />
      <Intro />
      <Courses title={''} data={courses} />
      <News title={'News'} data={data.allMarkdownRemark.edges} />
      <Companies logos={companies} />
    </Layout>);
};


export const query = graphql`
  query IndexQuery{
    allMarkdownRemark(
        limit: 2,
        filter: { frontmatter: { template: { eq: "news" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
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

