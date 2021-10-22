import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Title, Content, Texts, Top } from './styles';

export const Speakers = props => (
  <Top>
    <Wrapper as={Container} id="projects">
      <Title>
        <h2>企業講師陣</h2>
      </Title>
      <Grid len={props.data.length}>
        {props.data.map(d => (
          <Card pad="1rem 0 0 0">
            <Content>
              <img src={d.img} />
              <Texts>
                <h4>{d.name}</h4>
                <p>{d.company}</p>
              </Texts>
            </Content>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  </Top>
);
