import React from 'react';
import Photo from './Photo';

const PhotoList = props => {
  let results = props.data;
  console.log(results.photos);
  let photos = results.map((x) =>
    <Photo url="https://farm{x.farm-id}.staticflickr.com/{x.server-id}/{x.id}_{x.secret}.jpg" key={x.index}/>
  )
  return(
    <ul className="photo-list">
      {photos}
    </ul>
  );
}

export default PhotoList;
