import React from 'react';
import { Link } from 'gatsby';
import { Container, Card } from 'components/common';
import { Wrapper, CardWrapper, PersonInlineBlock, PDFInlineBlock } from './styles';

// TODO: Image in PDFInlineBlock doesn't work on Chrome browser.

export const Details = ({ data }) => (
  <Wrapper>
    {data.map(item => (
      <Detail
        name={item.name}
        company={item.company}
        personImg={item.personImg}
        pdfImg={item.pdfImg}
        title={item.title}
      />
    ))}
  </Wrapper>
);

const Detail = ({ personImg, name, company, pdfImg }) => (
  <CardWrapper>
    <Card>
      <div style={{ padding: '1rem', background: 'white' }}>
        <PersonInlineBlock>
          <img alt="person" src={personImg} />
          <p>{name}</p>
          <p>{company}</p>
        </PersonInlineBlock>
        <PDFInlineBlock>
          <Link href={pdfImg}>
            <img alt="pdf-cover" src={pdfImg} />
          </Link>
        </PDFInlineBlock>
      </div>
    </Card>
  </CardWrapper>
);
