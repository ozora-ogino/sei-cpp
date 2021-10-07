import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'components/common';

export const Strong = props => {
  const Wrapper = styled.div`
  text-align: center;
  img {
    max-width: 420px;
  }

  @media (max-width: 960px) {
    .top {
      display: none;
    }
  }

  @media (min-width: 960px) {
    padding: 4rem;
    padding-bottom: 0;
    display: flex;

    .bottom {
      display: none
    }

    img {
      vertical-align: middle;
      margin: 0 auto;
      padding: 0
      width: 400px;
    }
    .flex-item {
      margin-top: 20px;
      height: 100%;
      text-align: left;
      vertical-align: middle;
      height: 100%;
      margin: auto;

      a {
        color: var(--secondary);
        text-decoration: underline;
      }
    }
  }
`;
  return (
    <div style={{ background: 'white' }}>
      <Wrapper as={Container}>
        <div className="flex-item top">
          <h3>{props.title}</h3>
          {props.data.map(item => (
            <p>{item}</p>
          ))}
          <Link href={props.linkPDF}>
            <p>資料はこちら</p>
          </Link>
        </div>
        <img src={props.img} />
        <div className="flex-item bottom">
          <h3>{props.title}</h3>
          {props.data.map(item => (
            <p>{item}</p>
          ))}
          <Link href={props.linkPDF}>
            <p>資料はこちら</p>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
