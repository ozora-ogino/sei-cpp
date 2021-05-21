import React from 'react';
import { Link } from 'gatsby';
import { Container, } from 'components/common';
import { Wrapper, Grid, CourseCard, Item, Content, Title, Button, Long } from './styles';

export const Courses = (props) => {
  return (
    <Wrapper as={Container} id="projects">
      <Title><h2>{props.title}</h2></Title>
      <Grid len={props.data.length}>
        {
          props.data.map((d) => (
            <Item as="a" href={d.url} target="_blank" rel="noopener noreferrer">
              <CourseCard>
                <Content>
                  <h4>{d.name}</h4>
                  <p>期間 : {d.long}</p>
                  <p>{d.description}</p>
                </Content>
              </CourseCard>
            </Item>
          ))
        }
      </Grid>
      <Long>
        <CourseCard>
          <Content>
            <h4>{props.long.name}</h4>
            <p>期間 : {props.long.long}</p>
            <p>{props.long.description}</p>
          </Content>
        </CourseCard>
      </Long>
      <Link to='/seminars'><Button>各コースの詳細はこちら</Button></Link>
    </Wrapper>
  );
}