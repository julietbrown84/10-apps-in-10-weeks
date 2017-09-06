import React from 'react';
import ReactDOM from 'react-dom';

class ImageBanner extends React.Component {
  render() {
    return (
      <div className='image-banner'>
      	 <img src='http://placekitten.com/g/800/200' />

         have a animated svg pattern
      </div>
    )
  }
}

module.exports = ImageBanner;