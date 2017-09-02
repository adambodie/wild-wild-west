import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PhotoList from './Components/PhotoList';

const url = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=0c3f8d32a28de8434240115b85a28499&user_id=8994820@N07&format=json&nojsoncallback=1';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        photos: []
      };
    }

    componentDidMount() {
      axios.get(url)
        .then(response => {
          this.setState({
            photos: response.data.data
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

    render() {
      console.log(this.state.photos);
      return (
        <div>
          <div className="main-header">
            <div className="inner">
              <h1 className="photo">Adam&apos;s Wild Wild West</h1>
            </div>
          </div>
          <div className="main-content">
            <PhotoList data={this.state.photos}/>
          </div>
        </div>
      );
    }
}
