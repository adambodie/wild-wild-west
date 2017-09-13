import React from 'react';

const Photo = props => (
  <div>
        <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`} alt={props.title}/>
        <h3>{props.title}</h3>
        <h6>{props.index} of 300</h6>
  </div>
);

export default Photo;
