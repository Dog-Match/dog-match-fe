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
    const {
      name,
      weight,
      height,
      imgUrl: img1,
      life_span: lifeSpan,
      temperament: temperaments,
      breed_group
    } = this.state.breed;

    const {
      description,
      image: img2
    } = this.state.gitBreed;

    return (
      <div className="details-center-div">
        <div className='details-card'>
          <h2>{name}</h2>
          <section className='dog-pics'>
            <img src={img1} alt={this.state.breed.name} className="big-dog-pic" />
            <img src={img2} alt={this.state.breed.name} className="big-dog-pic" />
          </section>
          <p>{description}</p>
          <div className="details-two-col">
            <div className="details-breed-stats">
              <span className="personality-head">Personality Traits:</span>
              <div>{temperaments}</div>

            </div>
            <div className="details-breed-stats">
              <span className="personality-head">Stats:</span>
              <div>Weight: {weight}</div>
              <div>Height: {height}</div>
              <div>Life Span: {lifeSpan}</div>
              <div>Breed Group: {breed_group}</div>
            </div>
          </div>
          <section className="details-traits">
          </section>
          <section className="breed-stats">
          </section>
        </div>
      </div>
    );
  }
}
