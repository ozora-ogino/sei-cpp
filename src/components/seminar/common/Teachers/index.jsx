import React from 'react';
import { Container } from 'components/common';
import { Link } from 'gatsby';
import { Wrapper, Grid, Content, Texts, Title, Card, Top } from './styles';

export const Teachers = (props) => {
  return (
    <Top>
      <Wrapper as={Container} id="projects">
        <Title><h2>大学教師陣</h2></Title>
        <Grid len={props.data.length}>
          {
            props.data.map((d) => (
              <Card>
                <Content>
                  <img src={d.img} />
                  <Texts>
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
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