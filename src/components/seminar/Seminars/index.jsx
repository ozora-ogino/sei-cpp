import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, CourseCard } from 'components/common';
import { Wrapper, Grid, Item, Content, Card, Top, Button } from './styles';


export const Seminars = (props) => {
  return (
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1>セミナーの概要</h1>
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
