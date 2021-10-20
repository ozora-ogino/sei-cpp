import React from 'react';
import { Container, Card } from 'components/common';
import { Header } from 'components/theme';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { Wrapper, Grid, Item, Content, Top, Button } from './styles';

export const News = ({ data }) => (
  <Top>
    <Header />
    <Wrapper as={Container} id="projects">
      <Fade left>
        <Grid>
          {data.map(d => (
            <NewsItem data={d} />
          ))}
        </Grid>
      </Fade>
    </Wrapper>
  </Top>
);

const NewsItem = ({ data }) => (
  <Item as="a" href={data.url} target="_blank" rel="noopener noreferrer">
    <Card pad="2rem 1rem .8rem 1rem">
      <Content>
        <h4>{data.node.frontmatter.title}</h4>
        <p>{data.node.frontmatter.description}</p>
      </Content>
      <Link to={`/${data.node.frontmatter.slug}`}>
        <Button>詳細</Button>
      </Link>
    </Card>
  </Item>
);
