 import React from 'react';
 import ReactDOM from 'react-dom';
 import Slider from 'react-slick';
 import { Container, Row, Col } from 'react-grid-system';

 import Canvas from './houses/Canvas.js';
 
 class SliderSlick extends React.Component {
  render() {
    var settings = {
      dots: true,
     
    };

    return (
      <div className='slider-slick-container'>
        <Slider {...settings}>
          <div>
            <Canvas />
          </div>
        </Slider>
      </div>
    );
  }
}

module.exports = SliderSlick;

