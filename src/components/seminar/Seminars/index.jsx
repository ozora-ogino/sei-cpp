import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, CourseCard } from 'components/common';
import { ListItems, Targets } from './ListsItems';
import { Wrapper, Grid, Item, Content, Card, Top, Button } from './styles';

const effects = [
  '国際的競争に勝つための提案型ビジネスアナリスト',
  '企画力、構想力、提案力、実現力の養成',
  'グローバル・次世代高度人材 （グローバルCommunication skills BA）としてのスキル'
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

export const Seminars = (props) => {
  return (
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1>セミナーの概要</h1>
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
