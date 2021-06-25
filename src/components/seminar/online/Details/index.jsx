import React from 'react';
import { Link } from 'gatsby';
import { Container, Card } from 'components/common';
import { ListItems, Targets } from '../../common/ListItems';
import { Wrapper, CardWrapper, PersonInlineBlock, PDFInlineBlock } from './styles';

export const Details = (props) => {
  return (
    <Wrapper>
      {props.data.map(item => {
        return <Detail
          name={item.name}
          company={item.company}
          personImg={item.personImg}
          pdfImg={item.pdfImg}
          title={item.title}
        />
      })}
    </Wrapper>
  );
};


export const Detail = (props) => {
  return (
    <CardWrapper>
      <Card>
        <div style={{ padding: '1rem', background: 'white' }} >
          <PersonInlineBlock>
            <img src={props.personImg} />
            <p>{props.name}</p>
            <p>{props.company}</p>
          </PersonInlineBlock>
          <PDFInlineBlock>
            <img src={props.pdfImg} />
          </PDFInlineBlock>
        </div>
      </Card>
    </CardWrapper>
  )
}