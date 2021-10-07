import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Card, Button } from 'components/common';
import { Examples } from 'components/nasa';
import coverImg from 'assets/illustrations/nasa.svg';

const Cover = styled.div`
  background: var(--primary);
  color: white;
	padding: 2rem;
	text-align: center;

  img {
		max-width: 300px;
    margin-bottom: 0;
    width: 40%;
    margin: auto;
    padding: 2rem;
  }

  a {
    text-decoration: underline;
    color: var(--secondary);
  }

	.description {
		width: 450px;
		text-align: left;
		margin: auto;
	}

}
`;

export const Intro = () => (
  <Cover>
    <h2> NASA × CPP Incubation Center</h2>
    <img src={coverImg} />
    <div className="description">
      <p>SEI-CPPはNasaと共同でInnovationの支援をしています。</p>
      <p>1. NASAからの多様なビジネスのサポート</p>
      <p>2. ロサンゼルスでの低コストなオフィスの提供</p>
      <p>3. CalPoly大学の教授や優秀な生徒からのサポート</p>
    </div>
    <Link to="/contact">
      <Button>お問い合わせ</Button>
    </Link>
    <Examples />
  </Cover>
);
