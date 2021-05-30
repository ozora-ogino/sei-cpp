import React from 'react';
import { Container, Card } from 'components/common';
import { Header } from 'components/theme';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { Wrapper, Grid, Item, Content, Top, Button } from './styles';

export const News = (props) => {
  return (
    <Top>
      <Header />
      <Wrapper as={Container} id="projects">
        <Fade left>
          <Grid len={props.length}>
            {
              props.data.map((d) => (
                <Item as="a" href={d.url} target="_blank" rel="noopener noreferrer">
                  <Card pad='1rem 0 .2rem 0'>
                    <Content>
                      <h4>{d.node.frontmatter.title}</h4>
                      <p>{d.node.frontmatter.description}</p>
                    </Content>
                    <Link to={'/' + d.node.frontmatter.slug}><Button>詳細</Button></Link>
                  </Card>
                </Item>
              ))
            }
          </Grid>
        </Fade>
      </Wrapper>
    </Top>
  );
}