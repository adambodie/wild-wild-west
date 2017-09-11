import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PhotoList from './Components/PhotoList';

const url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157688485135075&user_id=8994820%40N07&per_page=300&format=json&nojsoncallback=1' //'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=0c3f8d32a28de8434240115b85a28499&user_id=8994820@N07&per_page=300&format=json&nojsoncallback=1';

//https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0c3f8d32a28de8434240115b85a28499&photoset_id=72157688485135075&user_id=8994820%40N07&per_page=300&format=json&nojsoncallback=1
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
            photographs: response.data.photoset.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }

    render() {
      return (
        <div>
          <div className="main-header flex-container">
            <div className="inner flex-item">
                <h1>Adam&apos;s Wild Wild West</h1>
            </div>
          </div>
          <div className="main-content">
            <PhotoList data={this.state.photographs}/>
          </div>
        </div>
      );
    }
}
