import React from 'react';
import styled from 'styled-components';
import coverImg from 'assets/illustrations/nasa.svg'



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
    margin-bottom: 1rem;

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }

  img {
    margin-bottom: 0;
    width: 50%;
    margin: auto;
    padding: 2rem;
  }

  a {
    text-decoration: underline;
    color: var(--secondary);
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
          font-size: 24pt;
      }
      @media (max-width: 1000px) {
          font-size: 13pt;
      }
    }

    p {
      text-align: left;
      margin: 0.7rem;
    }
  }

  .bottom-message {
    text-align: center;
    margin: auto;
    padding-bottom: 1rem;

    .letter-h2 {
      margin: auto;
      text-align: left;
    }

    h2 {
      font-size: 16pt;
      margin: 0.5rem;
    }

    p {
      margin: 0.5rem;
    }

    @media (min-width: 681px) {
    display: None;
    }
}
`;


export const Nasa = () => {
  return (
    <Cover>
      <div className='cover'>
        <div className='top-message'>
          <div className='letter-h2'>
            <h2>NASA × Cal Poly</h2>
            <p>NASAと共同で皆様のイノベーションを支援します。</p>
          </div>
          <a href={'https://www.cpp.edu/cba/nasacpp/index.shtml'}><p>Cal Poly HP</p></a>
        </div>
        <img src={coverImg} />
        <div className='bottom-message'>
          <div className='letter-h2'>
            <h2>NASA × CPP</h2>
            <p>NASAと共同で皆様のイノベーションを支援します。</p>
            <a href={'https://www.cpp.edu/cba/nasacpp/index.shtml'}><p>Cal Poly HP</p></a>
          </div>
        </div>
      </div>
    </Cover>
  );
};
