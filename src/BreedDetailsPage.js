import React, { Component } from 'react';
import { getBreedByName } from './fetch-utils';

export default class BreedDetailsPage extends Component {
  state = {
    breed: []
  }
  componentDidMount = async () => {
    const breed = await getBreedByName(this.props.match.params.breed_name, this.props.token);
    this.setState({ breed });
  }
  render() {
    const breed = this.state.breed;
    return (
      <div className='detail-div'>
        <img src={breed.image.url} alt=''/>
        <p>Name: {breed.name}</p>
        <p>Bred for: {breed.bred_for}</p>
        <p>Life Span: {breed.life_span}</p>
        <p>Temperament: {breed.temperament}</p>
      </div>
    );
  }
}

