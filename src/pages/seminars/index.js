import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Seminars } from 'components/seminar';

export default () => {

    const courses = [
        {
            name: '短期セミナー',
            long: '約10日間',
            description: 'ビジネスアナリスト、デザイナー、コンサルタントに関する知識を身につけます。',
            to: "/seminars/short",
        },
        {
            name: '長期セミナー',
            long: '約２ヶ月間',
            description: 'カリフォルニアで長期の育成セミナーをします。週末にはGoogleやAmazonなどの企業訪問もあります。',
            to: "/seminars/long",
        },
    ]

    return (
        <Layout>
            <SEO />
            <Seminars data={courses} />
        </Layout>);
};