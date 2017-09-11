import React from 'react';
import Slider from 'react-slick';
import Photo from './Photo';

const PhotoList = props => {
  let results = props.data;
  console.log(results);
  let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
  let photos = results.map((x) =>
    <div key={x.id}>
    <Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title}/>
    </div>
  )
  return(
    <Slider {...settings}>
      {photos}
    </Slider>
  );
}

export default PhotoList;
