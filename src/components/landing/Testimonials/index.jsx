import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Wrapper } from './styles';


export const Testimonials = (props) => {
	return (
		<Wrapper>
			<Carousel
				showArrows={true}
				infiniteLoop={true}
				showThumbs={false}
				showStatus={false}
				autoPlay={true}
				interval={6100}
			>
				{props.data.map((item) => {
					return (
						<div>
							<div className='myCarousel'>
								<img src={item.img} />
								<h3>{item.name}</h3>
								<h4>{item.company}</h4>
								<p>{item.message}</p>
							</div>

						</div>
					)

				})}
			</Carousel>
		</Wrapper>
	);
}