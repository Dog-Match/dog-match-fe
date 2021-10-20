import React, { Component } from 'react';
import { getFavorites, postFavorite } from '../fetch-utils';
import '../styles/BreedCard.css';

export default class BreedCard extends Component {
  state = {
    favorites: []
  }
  componentDidMount = async () => {
    const favorites = await getFavorites(this.props.token);
    this.setState({ favorites });
  }
  handleFavorite = async () => {
    await postFavorite(this.props.name, this.props.token);
    const favorites = await getFavorites(this.props.token);
    this.setState({ favorites });
    console.log(this.state.favorites);
  }

  handleDelete = async () => {
    
  }

  checkFavorites = (name, favoritesArr) => {
    return favoritesArr.find(favorite => favorite.name === name);
  }

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
        { !this.checkFavorites(name, this.state.favorites) && 
        <button onClick={this.handleFavorite}>Add to Favorites</button>
        }
        
        <a href={adoptionLink}>Adopt This breed</a>
      </div>
    );
  }
}
