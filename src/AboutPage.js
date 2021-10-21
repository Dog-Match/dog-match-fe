import React, { Component } from 'react';
import gitcat from './img/github2.png';
import li from './img/linkedin1.png';
import xolo from './img/xoloitzcuintle.png';
import boxer from './img/boxer.png';
import bulldog from './img/bulldog-2.png';
import mia from './img/pitbull.png';
import './styles/AboutPage.css';
 
export default class AboutPage extends Component {
  render() {
    return (
      <div className = "large-container">

        {/* Taylor Bio Card */}
        <div className = "medium-container">
          <h1>Taylor Williams</h1>
          <img src={ xolo } alt="xolo" className="doggieT"/>
          <h3>Portland, Oregon</h3>
          <h4>Favorite Breed: Xoloitzcuintli </h4>
          <section className ="icon-container" > 
            <a href="https://github.com/taylor-c-williams"className="icon">
              <img src={ gitcat } alt="github"/>
            </a>          
            <a href="https://www.linkedin.com/in/taylor-c-williams/" className="icon">
              <img src= { li } alt="linkedin"/>
            </a>
          </section>
        </div>

        {/* Dylan Bio Card */}
        <div className = "medium-container">
          <h1>Dylan Floyd</h1>
          <img src= { boxer } alt="boxer" className="doggieD"/>
          <h3>Vancouver, Washington</h3>
          <h4>Favorite Breed: Boxer</h4>
          <section className ="icon-container" > 
            <a href="https://github.com/Dylan-Floyd" className="icon">
              <img src={ gitcat } alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/dylan-c-floyd/" className="icon">
              <img src={ li } alt="Linkedin"/>
            </a>
          </section>
        </div>

        {/*  Amit Bio Card  */}
        <div className = "medium-container">
          <h1>Amit Sheth</h1>
          <img src={ bulldog } alt="bulldog" className="doggieA"/>
          <h3>Houston, Texas</h3>
          <h4>Favorite Breed: Burmese Mountain Dog</h4>
          <section className ="icon-container" >
            <a href="https://github.com/AmitSheth9" className="icon">
              <img src={ gitcat } alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/amitsheth9/" className="icon">
              <img src={ li } alt="Linkedin"/>
            </a>
          </section>
        </div>

        {/* Stef Bio Card  */}
        <div className = "medium-container">
          <h1>Estefani Baughman</h1>
          <img src={ mia } alt="mia" className="doggieS"/>

          <h3>DFW Metroplex, Texas</h3>
          <h4>Favorite Breed: Mixed</h4>
          <section className ="icon-container" > 
            <a href="https://github.com/HonduranCoder" className="icon">
              <img src={ gitcat } alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/estefani-baughman/" className="icon">
              <img src={ li } alt="Linkedin"/>
            </a>
          </section>
        </div>
      </div>
    );
  }
}