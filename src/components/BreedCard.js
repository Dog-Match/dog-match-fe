import React, { Component } from 'react';
import '../styles/BreedCard.css';

export default class BreedCard extends Component {

  render() {
    const name = this.props.name;
    const weight = this.props.weight.imperial + ' pounds.';
    const height = this.props.height.imperial + ' inches.';
    const lifeSpan = this.props.life_span;
    const temperaments = this.props.temperament;
    return (
      <div className="breed-card">
        <h3>Breed: {name}</h3>
        <ul>
          <li>Weight: {weight}</li>
          <li>Height: {height}</li>
          <li>Life Span: {lifeSpan}</li>
          <li>Temperaments: {temperaments}</li>
        </ul>
      </div>
    );
  }
}
