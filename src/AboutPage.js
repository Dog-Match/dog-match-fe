import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import dog from './img/dogHeart.png';
import gitcat from './img/github2.png';
import li from './img/linkedin6.png';
import './styles/AboutPage.css';
 
export default class AboutPage extends Component {
  render() {
    return (
      <div className = "large-container">
        <div className = "medium-container">
          <img className="dog" src={ dog } alt="Dog" width="12%"/>
          <h3>Taylor Williams</h3>
          <span>Favorite Breed: Husky</span>
          <span>Location: Portland, OR</span>
          <h4>Contact:</h4>
          <section className ="icon-container" > 
            <a href="https://github.com/taylor-c-williams">
              <img src={ gitcat } alt="Github" width="15%"/>
            </a>
            <a href="https://www.linkedin.com/in/taylor-c-williams/">
              <img src={ li } alt="LinkedIn" width="15%"/>
            </a>
          </section>
        </div>    
        <div className = "medium-container">
          <img className="dog" src={ dog } alt="Dog" width="12%"/>
          <h3>Dylan Floyd</h3>
          <span>Favorite Breed: Husky</span>
          <span>Location: Vancouver, WA</span>
          <h4>Contact:</h4>
          <section className ="icon-container" > 
            <a href="https://github.com/Dylan-Floyd">
              <img src={ gitcat } alt="Github" width="15%"/>
            </a>
            <a href="https://www.linkedin.com/in/dylan-c-floyd/">
              <img src={ li } alt="Linkedin" width="15%"/>
            </a>
          </section>
        </div>
        <div className = "medium-container">
          <img className="dog-icon" src={ dog } alt="Dog" width="12%"/>
          <h3>Amit Sheth</h3>
          <span>Favorite Breed: Bernese Mountain Dog</span>
          <span>Location: Houston, TX</span>
          <h4>Contact:</h4>
          <section className ="icon-container" >
            <a href="https://github.com/AmitSheth9">
              <img src={ gitcat } alt="Github" width="15%"/>
            </a>
            <a href="https://www.linkedin.com/in/amitsheth9/">
              <img src={ li } alt="Linkedin" width="15%"/>
            </a>
          </section>
        </div>
        <div className = "medium-container">
          <img className="dog-icon" src={ dog } alt="Dog" width="12%"/>
          <h3>Estefani Baughman</h3>
          <span>Favorite Breed: Mixed Breed</span>
          <span>Location: DFW Metroplex, TX</span>
          <h4>Contact:</h4>
          <section className ="icon-container" > 
            <a href="https://github.com/HonduranCoder">
              <img src={ gitcat } alt="Github" width="15%"/>
            </a>
            <a href="https://www.linkedin.com/in/estefani-baughman/">
              <img src={ li } alt="Linkedin" width="15%"/>
            </a>
          </section>
        </div>
      </div>
    );
  }
}