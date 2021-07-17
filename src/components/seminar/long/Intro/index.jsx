import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Card } from 'components/common';
import { ListItems, Targets } from '../../common/ListItems';
import { Wrapper, Grid, Button, DocWrapper, PDFWrapper } from './styles';
import { Global } from 'style/global';
import isshiki from 'assets/speakers-icon/isshiki-2.png'
import seminarPDF from 'assets/pdf/cpp2021.pdf';

const effects = [
  '国際的競争に勝つための提案型ビジネスアナリスト',
  '企画力、構想力、提案力、実現力の養成',
  'グローバル・次世代高度人材、BAとしてのスキル'
]

const features = [
  '研修、ワーク、課題を通して新手法などが必ず身につくカルキュラム',
  'グループワークによるチームで課題解決手法が身に着つきます',
  '会社経営者が求める目標を具体的に推進する力が身に着きます'
]

const participants = [
  '経営企画・新規事業の開拓を担当されている方',
  'ユーザ企業で変革を担当されているシステム部門のリーダの方',
  'US西海岸へ進出を考えている企業の実務リーダの方',
  '自ら成長を求めている方',
]


export const Intro = (props) => {
  return (
    <Global>
      <Header />
      <Wrapper as={Container}>
        <h1 style={{ marginBottom: '3rem' }}>長期セミナー</h1>
        <div style={{ marginBottom: '3rem' }}>
          <Card margin='3rem 0'>
            <DocWrapper>
              <img src={isshiki} />
              <div>
                {/* <p>初めまして。Cal Poly（カリフォルニア州立工科大学）Pomona校にて教授を務めております一色浩一郎です。 */}
                <h3>一色 浩一郎 (カリフォルニア州立工科大学 教授)</h3>
                {/* </p> */}
                <p>
                  本セミナーはロサンゼルスにあるCal Poly Pomona校を拠点として行います。
                  Cal PolyはUberをはじめ多くの事業を育んできました。
                  セミナーでは大学からだけではなく企業からも講演者をお招きして今起きている<span style={{ fontWeight: 'bold' }}>Disruption（破壊的創造）</span>、
                  今後予想されるDisruptionを支える最新技術をお伝え致し、御社のDXをサポート致します。
                </p>
              </div>
            </DocWrapper>
          </Card>
        </div>
        <Card margin='3rem 0'>
          <PDFWrapper>
            <img src={seminarPDF} width='200rem' />
            <Link href={seminarPDF}><Button>資料はこちら</Button></Link>
          </PDFWrapper>
        </Card>
        <Targets data={participants} title='本セミナーの対象者' color='##ec407a' />
        <Grid>
          <ListItems data={features} title='セミナーの特徴' />
          <ListItems data={effects} title='得られる効果' />
        </Grid>
      </Wrapper>
    </Global >
  );
};
