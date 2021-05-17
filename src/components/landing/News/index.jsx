import React from 'react';
import { Container, ProjectsCard } from 'components/common';
import { Link } from 'gatsby';
import { Wrapper, Grid, Item, Content, Title, Top, Button } from './styles';

export const  News = (props) => {
    return (
      <Top>
        <Wrapper as={Container} id="projects">
          <Title><h2>{props.title}</h2></Title>
          <Grid len={props.data.length}>
            {
              props.data.map((d) => (
            <Item  as="a" href={d.url} target="_blank" rel="noopener noreferrer">
              <ProjectsCard>
                <Content>
                  <h4>{d.name}</h4>
                  <p>{d.description}</p>
                </Content>
                <Link to={d.to}><Button>詳細</Button></Link>
              </ProjectsCard>
            </Item>
              ))
            }
          </Grid>
        </Wrapper>
      </Top>
      );
}