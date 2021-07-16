import React from 'react';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';

import { Layout, SEO } from 'components/common';
import { Intro, Merit, News, Companies, Thumbnail, Testimonials, Seminars, Videos, Nasa } from 'components/landing';
import { Header } from 'components/theme';
import { Global } from 'style/global';

import google from 'assets/company-logos/google.png'
import ms from 'assets/company-logos/ms.jpg'
import uber from 'assets/company-logos/uber.png'
import amazon from 'assets/company-logos/amazon.webp'
import disney from 'assets/company-logos/disney.png'
import drivemode from 'assets/company-logos/drivemode.png'
import esri from 'assets/company-logos/esri.png'
import auriq from 'assets/company-logos/auriq.png'
import longimg from 'assets/illustrations/long-seminar.png'
import shortimg from 'assets/illustrations/short-seminar.png'
import onlineimg from 'assets/illustrations/online-cover.png'

/*
  TODO: Remove Courses directory

  TODO: 2021/06/06
    - Add SEI Cal Poly English YoutubTOD:
    - Cal Poly + Nasa!!!!!
    - America de yukkuri manaberu!
    - Decide koe of participants from inet Shigitani-san, NTT DST Ueki-san Asia-kosoku Ogawa-san or Yuiko-bo
    - CPP Purpose is to create innovative person
    - VOOCA is important
*/

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
  const online =
  {
    name: 'オンラインセミナー（参加無料）',
    long: '1年に2〜３回程度',
    img: onlineimg,
    description: '世界中で働くプロフェッショナルがZoomを通してDXやコロナ対策の取り組みなど、実例を交えてプレゼンします。',
    to: '/seminars/online',
  }
  const long =
  {
    name: '長期コース',
    long: '期間 : 最長4週間',
    img: longimg,
    description: 'ビジネスアナリスト、デザイナー、コンサルタントに関する知識を身につけます。',
    to: '/seminars/long',
  }
  const short =
  {
    name: '短期エグゼクティブコース',
    long: '期間 : 2週間',
    img: shortimg,
    description: '短期間で最新のビジネスの手法や知識、技術をみにつけることができます。',
    to: 'seminars/short',
  }

  const videos = [
    "https://www.youtube.com/embed/mxCqJJU8U7w",
    "https://www.youtube.com/embed/i0G2UXFvzls",
    "https://www.youtube.com/embed/C9xc0dRr5Xo",
  ]

  const testimonials = [
    {
      img: google,
      name: 'google',
      company: 'google',
      message: 'google message',

    },
    {
      img: google,
      name: 'google',
      company: 'google',
      message: 'google message',

    },
  ]


  return (
    <Global>
      <Layout>
        <SEO />
        <Header />
        <Thumbnail />
        <Intro />
        {/* <Merit /> */}
        <Nasa />
        <Seminars long={long} short={short} online={online} />
        <News title={'News'} data={data.allMarkdownRemark.edges} />
        <Companies logos={companies} />
        {/* <Testimonials data={testimonials} /> */}
        <Videos data={videos} />
      </Layout >
    </Global>
  );
};


export const query = graphql`
  query IndexQuery{
          allMarkdownRemark(
            limit: 2,
        filter: {frontmatter: {template: {eq: "news" }, draft: {ne: true } } },
        sort: {order: DESC, fields: [frontmatter___date] }
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
