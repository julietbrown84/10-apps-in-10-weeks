import React from 'react';
import GifItem from './GiftItem';

const GifList = (props) => {
   	const gifItems = props.gifs.map((image) => {
   		console.log('image', image);
	    return <GifItem key={image.id}
	            gif={image}
	            onGifSelect={props.onGifSelect} />
  	});

  	return (
   		<div className="gif-list">{gifItems}</div>
  	);

};

export default GifList;
