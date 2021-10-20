import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import cpp from 'assets/illustrations/cpp-slow.png';
import online from 'assets/illustrations/online.png';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Slider = () => (
  <AutoplaySlider
    play
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={cpp} />
    <div data-src={online} />
  </AutoplaySlider>
);
