import React, { Component } from 'react';
import Slider from 'react-slick';
import './App.css';
import axios from 'axios';
import PhotoList from './Components/PhotoList';

const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=0c3f8d32a28de8434240115b85a28499&user_id=8994820@N07&format=json&nojsoncallback=1';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        photographs: []
      };
    }

    componentDidMount() {
      axios.get(url)
        .then(response => {
          this.setState({
            photographs: response.data
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

    render() {
      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      return (
        <div>
          <div className="main-header flex-container">
            <div className="inner flex-item">
                <h1>Adam&apos;s Wild Wild West</h1>
            </div>
          </div>
          <div className="main-content">
          <Slider {...settings}>
              <div><img src='https://farm5.staticflickr.com/4342/36816007262_fae2df8885.jpg' alt='kitty'/></div>
              <div><img src='https://farm5.staticflickr.com/4342/36816007262_fae2df8885.jpg' alt='kitty'/></div>
              <div><img src='https://farm5.staticflickr.com/4342/36816007262_fae2df8885.jpg' alt='kitty'/></div>
          </Slider>
            <PhotoList data={this.state.photographs}/>
          </div>
        </div>
      );
    }
}
