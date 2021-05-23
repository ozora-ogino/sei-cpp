import React from 'react';
import { Container, Card } from 'components/common';
import { Link } from 'gatsby';
import { Wrapper, Grid, Item, Content, Title, Top, Button } from './styles';

export const News = (props) => {
  return (
    <Top>
      <Wrapper as={Container} id="projects">
        <Title><h2>{props.title}</h2></Title>
        <Grid len={props.length}>
          {
            props.data.map((d) => (
              <Item as="a" href={d.url} target="_blank" rel="noopener noreferrer">
                <Card pad='1rem 0 0 0'>
                  <Content>
                    <h4>{d.node.frontmatter.title}</h4>
                    <p>{d.node.frontmatter.description}</p>
                  </Content>
                  <Link to={d.node.frontmatter.slug}><Button>詳細</Button></Link>
                </Card>
              </Item>
            ))
          }
        </Grid>
      </Wrapper>
    </Top>
  );
}