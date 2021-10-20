import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Wrapper } from './styles';

export const Testimonials = props => (
  <Wrapper>
    <Carousel showArrows infiniteLoop showThumbs={false} showStatus={false} autoPlay interval={6100}>
      {props.data.map(item => (
        <div>
          <div className="myCarousel">
            <img src={item.img} />
            <h3>{item.name}</h3>
            <h4>{item.company}</h4>
            <p>{item.message}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </Wrapper>
);
