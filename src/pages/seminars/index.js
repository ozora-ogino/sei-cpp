import React from 'react';
import { Layout, SEO } from 'components/common';
import { Courses } from 'components/seminar/common';
import { Header } from 'components/theme';
import short from 'assets/illustrations/short-seminar.png'

export default () => {

    const courses = [
        {
            name: '短期エグゼクティブセミナー',
            long: '約10日間',
            img: short,
            description: '経営者層向けに短期で最新のビジネスの手法や知識、技術をみにつけます。米有名企業の社員との交流もあります。　',
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
            <Header />
            <Courses data={courses} />
        </Layout>);
};