import React from 'react';

const Photo = props => (
  <div>
        <img src={`https://s3-us-west-2.amazonaws.com/wildwildwest.bodiewebdesign.com/static/images/${props.id}_o.jpg`} alt={props.title}/>
        <h3>{props.title}</h3>
        <h6>{props.index} of 300</h6>
  </div>
);

export default Photo;