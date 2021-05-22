import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, CourseCard } from 'components/common';
import { ListItems, Targets } from './ListsItems';
import { Wrapper, Grid, Item, Content, Card, Top, Button } from './styles';
import isshiki from 'assets/speakers-icon/isshiki-2.png'
import seminarPDF from 'assets/pdf/cpp2021-short.pdf';

const effects = [
  '世の中で生じているデータビジネスの変化に対する対応力',
  'AI、IoT、5Gがもたらす技術革新に対して柔軟に対応する力',
  '技術変化をサイドりして新しいビジネスを生み出す企業の知識',
  'VUCA時代で生き残るための知識',
]

const features = [
  '訪問や視察だけでなく活動、行動がメインの研修',
  'セミナー参加者と現地のスタートアップとの相互の事業紹介の機会',
  'Cal Poly大学教授である一色教授の技術解説をするシリコンバレーアー',
  '随時翻訳が同行するため英語に自信がない方でも心配ありません',
]

const participants = [
  '経営企画・新規事業の開拓を担当されている方',
  '経営者、部長、本部長、執行役員次期経営者の方',
  'US西海岸へ進出を考えている企業の方',
  'エコシステムを構築した自治体や大学の方',
]

export const Intro = (props) => {
  return (
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1 style={{ marginBottom: '3rem' }}>短期エグゼクティブセミナー</h1>
        <Card>
          <img src={isshiki} />
          <div>
            <p>初めまして。Cal Poly（カリフォルニア州立工科大学）Pomona校にて教授を務めております一色浩一郎です。
            </p>
            <p>
              本セミナーはロサンゼルスにあるCal Poly Pomona校を拠点として行います。
              Cal PolyはUberをはじめ多くの事業を育んできました。
              セミナーでは大学からだけではなく企業からも講演者をお招きして今起きている<span style={{ fontWeight: 'bold' }}>Disruption（破壊的創造）</span>、
              今後予想されるDisruptionを支える最新技術をお伝え致します。
            </p>
            <p>
              そして、現在のIT業界を引っ張る会社のクリエイティブ・リーダー達と膝詰めで意見交換をし、各社を訪問しながら議論する機会を設けました。
              各社に訪問し、クリエイティブ・リーダー達と議論することで、必ずや、皆様の会社の未来への道筋が見えてくることと存じます。
              これだけの企業と一気に交流できるのはまたとない機会かと思いますので、このチャンスをご活用ください
            </p>
          </div>
        </Card>
        <Card>
          <img src={seminarPDF} width='300rem' />
          <Link href={seminarPDF}><Button>資料はこちら</Button></Link>
        </Card>
        <Targets data={participants} title='本セミナーの対象者' color='##ec407a' />
        <Grid>
          <ListItems data={features} title='セミナーの特徴' />
          <ListItems data={effects} title='得られる効果' />
        </Grid>
      </Wrapper>
    </Top>
  );
};