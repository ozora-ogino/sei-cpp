import React from 'react';
import { Container, Card } from 'components/common';
import { Link } from 'gatsby';
import { Wrapper, Grid, Item, Content, Title, Top, Button } from './styles';

export const News = ({ title, data }) => (
  /*
  title: News for default.
  data:
    url: Link to news post.
    node.frontmatter.title: Title from .md file.
    node.frontmatter.description: Description from .md file.
    node.frontmatter.slug: Slug from .md file.

  */
  <Top>
    <Wrapper as={Container} id="projects">
      <Title>
        <h2>{title}</h2>
      </Title>
      <Grid>
        {data.map(d => (
          <NewsItem data={d} />
        ))}
      </Grid>
    </Wrapper>
  </Top>
);

const NewsItem = ({ data }) => (
  /*
  data:
    url: Link to news post.
    node.frontmatter.title: Title from .md file.
    node.frontmatter.description: Description from .md file.
    node.frontmatter.slug: Slug from .md file.

  */
  <Item as="a" href={data.url} target="_blank" rel="noopener noreferrer">
    <Card pad="1rem 1rem 0 1rem">
      <Content>
        <h4>{data.node.frontmatter.title}</h4>
        <p>{data.node.frontmatter.description}</p>
      </Content>
      <Link to={data.node.frontmatter.slug}>
        <Button>詳細</Button>
      </Link>
    </Card>
  </Item>
);
