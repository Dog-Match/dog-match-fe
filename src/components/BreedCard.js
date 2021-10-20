import React, { Component } from 'react';
import '../styles/BreedCard.css';

export default class BreedCard extends Component {

  render() {
    const name = this.props.name;
    const weight = this.props.weight.imperial + ' pounds.';
    const height = this.props.height.imperial + ' inches.';
    const lifeSpan = this.props.life_span;
    const temperaments = this.props.temperament;
    const imgUrl = this.props.imgUrl;
    const adoptionLink = this.props.adoptionLink;
    return (
      <div className="breed-card">
        <h3>Breed: {name}</h3>
        <img src={imgUrl} alt={'a ' + name} />
        <ul>
          <li>Weight: {weight}</li>
          <li>Height: {height}</li>
          <li>Life Span: {lifeSpan}</li>
          <li>Temperaments: {temperaments}</li>
        </ul>
        <a href={adoptionLink}>Adopt This breed</a>
      </div>
    );
  }
}
