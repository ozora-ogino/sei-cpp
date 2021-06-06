import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Button } from 'components/common';
import styled from 'styled-components';
import top from 'assets/illustrations/topcover.png'
import nasacpp from 'assets/illustrations/nasacpp.png'


const Cover = styled.div`
vertical-align: middle;
img {
  background: white;
  margin-bottom: 0;
  width: 100%;
}

  .cov{
    position: relative;
  }

  .top-letter {
    height: 70%;
    width: 50%;
    position: absolute;
    left: 0;
    top: calc(20% - 25px);
    // text-align: center;
    font-weight: bold;
    text-align: left;
    @media (max-width: 580px) {
      display: none;
    }
    // color: white;
    color: black;
  }

  .top-letter button {
    margin-top: 0;
      @media (max-width: 960px) {
        font-size: 14px;
        }
    @media (max-width: 680px) {
      font-size: 8px;
    }

    @media (max-width: 480px) {
      font-size: 8px;
    }
  }

  .letter-h2 {
    margin: 4rem 0 2rem 2rem;
    h2 {
      text-align: left;
      font-size: 20pt;
      @media (max-width: 960px) {
        font-size: 14pt;
        }
      @media (max-width: 680px) {
        margin-bottom: .5rem;
        font-size: 10px;
        }
      }

    @media (max-width: 960px) {
      margin: 2rem 0 0rem 2rem;
    }
    @media (max-width: 680px) {
      margin: 2rem 0 1rem 2rem;
    }
    @media (max-width: 480px) {
      margin: 1rem 0 .5rem 2rem;
    }
}
`;



export const Thumbnail = () => {
  return (
    <Cover>
      <div className='cov'>
        <img src={nasacpp} />
        {/* <img src={top} /> */}
        <Fade bottom >
          <div className='top-letter'>
            <div className='letter-h2'>
              <h2>現役プロフェッショナルが教える</h2>
              <h2>シリコンパレー式ビジネス革新</h2>
              {/* <h2>NASAとカルフォルニア州立工科大学が教える</h2> */}
            </div>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </div>
        </Fade>
      </div>
    </Cover>
  );
};
