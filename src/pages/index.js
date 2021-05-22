import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Intro, Courses, News, Companies } from 'components/landing';
import google from 'assets/company-logos/google.png'
import ms from 'assets/company-logos/ms.jpg'
import uber from 'assets/company-logos/uber.png'
import amazon from 'assets/company-logos/amazon.webp'
import disney from 'assets/company-logos/disney.png'
import drivemode from 'assets/company-logos/drivemode.png'
import esri from 'assets/company-logos/esri.png'
import auriq from 'assets/company-logos/auriq.png'

export default ({ data }) => {

  const companies = [
    { img: ms, size: "240" },
    { img: google, size: "100" },
    { img: amazon, size: "200" },
    { img: uber, size: "200" },
    { img: disney, size: "240" },
    { img: drivemode, size: "240" },
    { img: esri, size: "200" },
    { img: auriq, size: "200" },
  ]

  const courses = [
    // {
    //   name: 'Innovative Business Creator育成コース',
    //   long: '最長4週間',
    //   description: 'ビジネスアナリスト、デザイナー、コンサルタントに関する知識を身につけます。',
    // },
    // {
    //   name: 'グローバル次世代ITプロフェッショナル育成コース',
    //   long: '最長４週間',
    //   description: 'プロジェクトマネージャー、エンジニアとして最新のシステム開発に関する知識を身につけます。',
    // },
    {
      name: '長期コース',
      long: '最長4週間',
      description: 'ビジネスアナリスト、デザイナー、コンサルタントに関する知識を身につけます。',
      to: '/seminars/long',
    },
    {
      name: '短期エグゼクティブコース',
      long: '2週間',
      description: '短期間で最新のビジネスの手法や知識、技術をみにつけることができます。',
      to: 'seminars/short',
    },
  ]

  const long = {
    name: '総合コース',
    long: '最長８週間',
    description: 'こちらのコースでは上記二つのコース両方の取得を目指します。',
  }

  return (
    <Layout>
      <SEO />
      <Intro />
      <Courses title={''} data={courses} long={long} />
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


