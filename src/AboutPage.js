import React, { Component } from 'react';
import dog from './public/dogHeart.png';
import './styles/aboutpage.css';
 
export default class AboutPage extends Component {
  render() {
  
    return (
      <div className = "large-container">
        <div className = "medium-container">
          <h2>Taylor Williams</h2>
          <img src={ dog } alt="Dog" width="40%"></img>
          <h3>Favorite Dog Breed:</h3>
          <h3>Location: Portland, OR</h3>
          <h3>Bio:</h3>
        </div>    
        <div className = "medium-container">
          <h2>Dylan Floyd</h2>
          <img src={ dog } alt="Dog" width="40%"></img>
          <h3>Favorite Dog Breed:</h3>
          <h3>Location: Vancouver, WA</h3>
          <h3>Bio:</h3>
        </div>
        <div className = "medium-container">
          <h2>Amit Sheth</h2>
          <img src={ dog } alt="Dog" width="40%"></img>
          <h3>Favorite Dog Breed:</h3>
          <h3>Location: Houston, TX</h3>
          <h3>Bio:</h3>
        </div>
        <div className = "medium-container">
          <h2>Estefani Baughman</h2>
          <img src={ dog } alt="Dog" width="40%"/>
          <h3>Favorite Dog Breed: unique mixed breed</h3>
          <h3>Location: DFW Metroplex, TX</h3>
          <h3>Bio:</h3>
        </div>
      </div>
    );
  }
}

