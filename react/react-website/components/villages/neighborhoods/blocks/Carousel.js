import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-grid-system';

class Carousel extends React.Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='slider-slick-container'>
            <Slider {...settings}>
                <div>
                    <div>
            		 	<img height="400px" className="article-cover" src="./images/home-page-image-one.jpg" /> 
                    </div>
                </div>
            </Slider>
        </div>
    );
  }
}

module.exports = Carousel;

