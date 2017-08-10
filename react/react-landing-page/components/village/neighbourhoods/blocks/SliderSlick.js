 import React from 'react';
 import ReactDOM from 'react-dom';
 import Slider from 'react-slick';
 import { Container, Row, Col } from 'react-grid-system';

 class SliderSlick extends React.Component {
  render() {
    var settings = {
      dots: true,
     
    };

    return (
      <div className='container'>
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
}

module.exports = SliderSlick;

