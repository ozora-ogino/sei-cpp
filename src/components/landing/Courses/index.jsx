import React from 'react';
import { Container, CourseCard } from 'components/common';
import { Link } from 'gatsby';
import { Wrapper, Grid, Item, Content, Title, Button } from './styles';

export const  Courses = (props) => {
    return (
        <Wrapper as={Container} id="projects">
          <Title><h2>{props.title}</h2></Title>
          <Grid len={props.data.length}>
            {
              props.data.map((d) => (
            <Item  as="a" href={d.url} target="_blank" rel="noopener noreferrer">
              <CourseCard>
                <Content>
                  <h4>{d.name}</h4>
                  <p>期間 : {d.long}</p>
                  <p>{d.description}</p>
                </Content>
                <Link to={d.to}><Button>詳細</Button></Link>
              </CourseCard>
            </Item>
              ))
            }
          </Grid>
        </Wrapper>
    );
}