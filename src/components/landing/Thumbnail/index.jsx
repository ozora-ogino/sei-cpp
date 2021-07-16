import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Button } from 'components/common';
import styled from 'styled-components';
import coverImg from 'assets/illustrations/cover-white-letter.svg'
// import nasacpp from 'assets/illustrations/nasacpp.png'



const Cover = styled.div`
  background: var(--primary);
  vertical-align: middle;
  color: white;
  .cov {
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 8fr;
    gap: 1.2rem 1.2rem;
    margin-bottom: 1rem;

    @media (max-width: 960px) {
    }

    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }

  img {
    margin-bottom: 0;
    width: 100%;
    margin: auto;
  }

  .top-letter {
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
        font-size: 13pt;
    }
    }
  }

  .bottom-letter {
    text-align: center;
    margin: auto;
    .letter-h2 {
      margin: auto;
      text-align: left;
    }
    h2 {
      font-size: 16pt;
      margin: 0.5rem;
    }
    @media (min-width: 681px) {
    display: None;
    }

    // @media (max-width: 960px) {
    //   margin: 2rem 0 0rem 2rem;
    // }
    // @media (max-width: 680px) {
    //   margin: 2rem 0 1rem 2rem;
    // }
    // @media (max-width: 480px) {
    //   margin: 1rem 0 .5rem 2rem;
    // }
}
`;


export const Thumbnail = () => {
  return (
    <Cover>
      <div className='cov'>
        <Fade bottom >
          <div className='top-letter'>
            <div className='letter-h2'>
              <h2>我々はSilicon Valleyのプロフェッショナルと共に</h2>
              <h2>日本のDXを支援しています。</h2>
              {/* <h2>現役プロフェッショナルが教える</h2>
              <h2>シリコンパレー式ビジネス革新</h2> */}
              {/* <h2>NASAとカルフォルニア州立工科大学が教える</h2> */}
            </div>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </div>
        </Fade>
        <img src={coverImg} />
        <div className='bottom-letter'>
          <div className='letter-h2'>
            <h2>我々はSilicon Valleyのプロフェッショナルと共に</h2>
            <h2>日本のDXを支援しています。</h2>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </div>
        </div>
      </div>
    </Cover>
  );
};

// export const Thumbnail = () => {
//   return (
//     <Cover>
//       <div className='cov'>
//         <img src={nasacpp} />
//         {/* <img src={top} /> */}
//         <Fade bottom >
//           <div className='top-letter'>
//             <div className='letter-h2'>
//               <h2>現役プロフェッショナルが教える</h2>
//               <h2>シリコンパレー式ビジネス革新</h2>
//               {/* <h2>NASAとカルフォルニア州立工科大学が教える</h2> */}
//             </div>
//             <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
//           </div>
//         </Fade>
//       </div>
//     </Cover>
//   );
// };
