import React from 'react';

/*https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg*/


const Photo = props => (
  <li className="photo-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Photo;
