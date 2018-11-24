import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PhotoList from './Components/PhotoList';

export default class App extends Component {
  constructor() {
      super();
      this.state = {
        photographs: []
      };
    }

    componentDidMount() {
      axios.get(`https://s3-us-west-2.amazonaws.com/wildwildwest.bodiewebdesign.com/data.json`)
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
