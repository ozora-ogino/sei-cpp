import React from 'react';
import { Container, Card } from 'components/common';
import cpp from 'assets/illustrations/cpps.png';
import { Root, Wrapper, IntroWrapper, Details, AboutUs } from './styles';
import { Slider } from './Slider';

export const Intro = () => (
  <Root>
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details>
          <AboutUs>
            <div className="right">
              <img src={cpp} alt="cpp-img" />
            </div>
            <div className="left">
              <h2>About Us</h2>
              <p>カリフォルニア州立工科大学 (Cal Poly)が主催するDX人材育成セミナーを運営しています。</p>
              <p>日本の企業の皆様に学びの機会とカリフォルニアのプロフェッショナルとの交流の場を提供しています。</p>
            </div>
          </AboutUs>
          <ul className="top-banner">
            <Slider />
          </ul>
        </Details>
      </IntroWrapper>
    </Wrapper>
  </Root>
);
