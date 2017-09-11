import React from 'react';

const Photo = props => (
  <div>
        <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt="xyz"/>
        <h3>{props.title}</h3>
  </div>
);

export default Photo;
