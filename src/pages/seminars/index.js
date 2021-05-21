import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components/common';
import { Seminars, Speakers, Teachers } from 'components/seminar';
import jimmy from 'assets/speakers-icon/jimmy.png'
import oishi from 'assets/speakers-icon/oishi.png'
import jeff from 'assets/speakers-icon/jeff.png'
import luca from 'assets/speakers-icon/luca.png'
import erik from 'assets/speakers-icon/erik.png'
import isshiki from 'assets/speakers-icon/isshiki.png'
import pike from 'assets/speakers-icon/pike.png'
import aytug from 'assets/speakers-icon/aytug.png'
import mohammad from 'assets/speakers-icon/mohammad.png'

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

    const speakers = [
        { img: jimmy, name: 'Jimmy Onihsi', company: 'Microsoft', job: '' },
        { img: oishi, name: 'Takeshi Oishi', company: 'Google', job: '' },
        { img: jeff, name: 'Jeff Stanford', company: 'Drive mode', job: '' },
        { img: luca, name: 'Luca', company: 'Uber', job: '' },
    ]

    const teachers = [
        // { img: erik, name: 'Erik Rolland Dean', job: 'College of Business Administration' },
        { img: aytug, name: 'Zeynep Aytug', job: 'Management & human Resources College of Business' },
        { img: pike, name: 'Roland Pike', job: 'Leader of Digital Transformation and Block Chain Cente' },
        { img: isshiki, name: 'Koichiro Isshiki', job: 'Organizer of this Seminar' },
        { img: mohammad, name: 'Mohammad Salehan', job: 'BI/Analytics ' },
    ]

    return (
        <Layout>
            <SEO />
            <Seminars data={courses} />
            <Speakers data={speakers} />
            <Teachers data={teachers} />
        </Layout>);
};