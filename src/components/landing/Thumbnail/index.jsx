import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Button } from 'components/common';
import styled from 'styled-components';
import coverImg from 'assets/illustrations/cover-white-letter.svg'



const Cover = styled.div`
  background: var(--primary);
  color: white;
  .cover {
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }

  img {
    margin-bottom: 0;
    width: 100%;
    margin: auto;
  }

  .top-message {
    padding-left: 1rem;
    margin: auto;
    text-align: left;
    @media (max-width: 680px) {
      display: None;
    }
    h2 {
      text-align: left;
      margin: 0.7rem;

      @media (max-width: 1240px) {
          font-size: 16pt;
      }
      @media (max-width: 1000px) {
          font-size: 12pt;
      }
    }
  }

  .bottom-message {
    text-align: center;
    margin: auto;
    .letter-h2 {
      margin: auto;
      text-align: left;
    }
    button {
      font-size: 14px;
    }
    h2 {
      font-size: 16pt;
      margin: 0.5rem;
    }

    @media (min-width: 681px) {
    display: None;
    }
}
`;


export const Thumbnail = () => {
  return (
    <Cover>
      <div className='cover'>
        <Fade bottom >
          <div className='top-message'>
            <div className='letter-h2'>
              <h2>我々はSilicon Valleyのプロフェッショナルと共に日本のDXを支援しています。</h2>
            </div>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </div>
        </Fade>
        <img src={coverImg} />
        <div className='bottom-message'>
          <div className='letter-h2'>
            <h2>我々はSilicon Valleyのプロフェッショナルと共に
              日本のDXを支援しています。</h2>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </div>
        </div>
      </div>
    </Cover>
  );
};
