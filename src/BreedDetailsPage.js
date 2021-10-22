import React, { Component } from 'react';
import { getBreedByName, getGitBreedInfo } from './fetch-utils';
import './styles/BreedDetailsPage.css';

export default class BreedDetailsPage extends Component {

  state = {
    breed: [],
    gitBreed: []

  }

  componentDidMount = async () => {
    const breed = await getBreedByName(this.props.match.params.breed_name, this.props.token);
    this.setState({ breed: breed });

    const gitBreed = await getGitBreedInfo(this.props.match.params.breed_name, this.props.token);
    this.setState({ gitBreed: gitBreed });
  }

  render() {
    return (
      <div className='details-card'>
        <div className='breed-info' >
          <p>Name: {this.state.breed.name}</p>
          <section className='dog-pics'>
            <img src={this.state.breed.imgUrl} alt={this.state.breed.name} />
            <img src={this.state.gitBreed.image} alt={this.state.breed.name} />
          </section>
          <p>Bred For: {this.state.breed.bred_for}</p>
          <p>Breed Group: {this.state.breed.breed_group}</p>
          <p>Life Span: {this.state.breed.life_span}</p>
          <p>Temperament: {this.state.breed.temperament}</p>
          <p>Height: {this.state.breed.height}</p>
          <p>Weight: {this.state.breed.weight}</p>
          <p>Description: {this.state.gitBreed.description}</p>
        </div>
      </div>
    );
  }
}
