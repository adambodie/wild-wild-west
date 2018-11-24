import React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

const PhotoList = props => {
  let settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};
  
  return(
    <Slider {...settings}>
      {props.data.map((x, index) =>
        <div key={x.id}>
          <Photo id={x.id} title={x.title} index={index + 1}/>
        </div>
      )}
    </Slider>
  );
}

export default PhotoList;
