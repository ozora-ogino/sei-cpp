import React from 'react';
import { Container } from 'components/common';
import { Link } from 'gatsby';
import { Wrapper, Grid, Title, Content, Texts, Card, Top } from './styles';

export const Speakers = (props) => {
  return (
    <Top>
      <Wrapper as={Container} id="projects">
        <Title><h2>企業講師陣</h2></Title>
        <Grid len={props.data.length}>
          {
            props.data.map((d) => (
              <Card>
                <Content>
                  <img src={d.img} />
                  <Texts>
                    <h4>{d.name}</h4>
                    <p>{d.company}</p>
                  </Texts>
                </Content>
              </Card>
            ))
          }
        </Grid>
      </Wrapper>
    </Top>
  );
}