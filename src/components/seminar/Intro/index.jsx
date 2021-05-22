import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, CourseCard } from 'components/common';
import { ListItems, Targets } from './ListsItems';
import { Wrapper, Grid, Item, Content, Card, Top, Button } from './styles';
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
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1>セミナーの概要</h1>
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


// export const Seminars = (props) => {
//   return (
//     <Top>
//       <Header />
//       <Wrapper as={Container}>
//         <Grid len={props.data.length}>
//           {
//             props.data.map((d) => (
//               <Item as="a" href={d.url} target="_blank" rel="noopener noreferrer">
//                 <CourseCard>
//                   <Content>
//                     <h4>{d.name}</h4>
//                     <p>期間 : {d.long}</p>
//                     <p>{d.description}</p>
//                   </Content>
//                   <Link to={d.to}><Button>詳細</Button></Link>
//                 </CourseCard>
//               </Item>
//             ))
//           }
//         </Grid>
//       </Wrapper>
//     </Top>
//   );
// };
