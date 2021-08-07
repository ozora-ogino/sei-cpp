import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Speakers, Teachers, Strong, Targets, TeachersIntro } from 'components/seminar/common'
import { DocWrapper } from './styles';
import isshiki from 'assets/speakers-icon/isshiki.png'
import people from 'assets/illustrations/participants.svg';
import strong from 'assets/illustrations/strong.svg';
import seminarPDF from 'assets/pdf/cpp2021.pdf';

import styled from 'styled-components';


import jimmy from 'assets/speakers-icon/jimmy.jpeg'
import oishi from 'assets/speakers-icon/oishi.png'
import jeff from 'assets/speakers-icon/jeff.png'
import luca from 'assets/speakers-icon/luca.png'
import erik from 'assets/speakers-icon/erik.png'
import pike from 'assets/speakers-icon/pike.png'
import aytug from 'assets/speakers-icon/aytug.png'



export const Wrapper = styled.div`
  text-align: center;
  margin: 3rem auto;
`;


const features = [
  '研修、ワーク、課題を通して新手法などが必ず身につくカルキュラム',
  '国際的競争に勝つための提案型ビジネスアナリストの育成',
  '企画力、構想力、提案力、実現力の養成',
]

const participants = [
  '経営企画・新規事業の開拓を担当されている方',
  'ユーザ企業で変革を担当されているシステム部門のリーダの方',
  'US西海岸へ進出を考えている企業の実務リーダの方',
  '自ら成長を求めている方',
]

const speakers = [
  { img: jimmy, name: 'Jimmy Onihsi', company: 'Microsoft', job: '' },
  { img: oishi, name: 'Takeshi Oishi', company: 'Google', job: '' },
  { img: jeff, name: 'Jeff Stanford', company: 'Drive mode', job: '' },
  { img: luca, name: 'Luca', company: 'Uber', job: '' },
]

const teachers = [
  { img: erik, name: 'Erik Rolland Dean', job: 'College of Business Administration' },
  { img: aytug, name: 'Zeynep Aytug', job: 'Management & human Resources College of Business' },
  { img: pike, name: 'Roland Pike', job: 'Leader of Digital Transformation and Block Chain Cente' },
  { img: isshiki, name: 'Koichiro Isshiki', job: 'Organizer of this Seminar' },
  // { img: mohammad, name: 'Mohammad Salehan', job: 'BI/Analytics ' },
]

export const Intro = (props) => {
  return (
    <div>
      <Header />
      <Wrapper as={Container}>
        <h1>長期セミナー</h1>
      </Wrapper>
      <DocWrapper as={Container}>
        {/* <img src={isshiki} /> */}
        {/* <div>
          <p>
            本セミナーはロサンゼルスにあるCal Poly Pomona校を拠点として行います。
            Cal PolyはUberをはじめ多くの事業を育んできました。
            セミナーでは大学からだけではなく企業からも講演者をお招きして今起きている<span style={{ fontWeight: 'bold' }}>Disruption（破壊的創造）</span>、
            今後予想されるDisruptionを支える最新技術をお伝えし、御社のDXをサポート致します。
          </p>
        </div> */}
      </DocWrapper>
      <Targets data={participants} title='本セミナーの対象者' img={people} />
      <Strong data={features} title='セミナーの特徴' img={strong} linkPDF={seminarPDF} />
      <div style={{ background: 'white' }}>
      </div>
      <TeachersIntro>
        <Speakers data={speakers} />
        <Teachers data={teachers} />
      </TeachersIntro>
    </div >
  );
};
