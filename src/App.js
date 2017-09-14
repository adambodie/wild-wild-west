import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PhotoList from './Components/PhotoList';


function formUrl(method, api_key, photoset_id, user_id, per_page) {
	return `https://api.flickr.com/services/rest/
	?method=${method}
	&api_key=${api_key}
	&photoset_id=${photoset_id}
	&user_id=${user_id}
	&per_page=${per_page}
	&format=json&nojsoncallback=1`;
}

const url = formUrl('flickr.photosets.getPhotos', 
					'0c3f8d32a28de8434240115b85a28499', 
					'72157688485135075', 
					'8994820%40N07', 
					'300'
					);

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
    let year = new Date().getFullYear();
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
          <div className="main-footer">
			<h4>Adam Bodie &copy; {year}</h4>
          </div>
        </div>
      );
    }
}
