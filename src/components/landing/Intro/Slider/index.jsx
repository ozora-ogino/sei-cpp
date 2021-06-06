import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
import cpp from 'assets/illustrations/cpp-slow.png';
import online from 'assets/illustrations/online.png';


export const Slider = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
        >
            <div data-src={cpp} />
            <div data-src={online} />
        </AutoplaySlider>
    );
}