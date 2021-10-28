import React, { Component } from 'react';
import { deleteFavorite, getFavorites, postFavorite } from '../fetch-utils';
import '../styles/BreedCard.css';
import heart from '../img/heart.png';
import { Link } from 'react-router-dom';
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
  }

  handleDelete = async () => {
    await deleteFavorite(this.props.name, this.props.token);
    const favorites = await getFavorites(this.props.token);
    this.setState({ favorites });
  }

  checkFavorites = (name, favoritesArr) => {
    return favoritesArr.find(favorite => favorite.name === name);
  }

  openAdoptionTab = () => {
    window.open(this.props.adoptionLink);
  }

  render() {
    const {
      name, 
      // this is how you can rename keys as you destructure
      life_span: lifeSpan, 
      temperaments, 
      imgUrl,
      // here I'm destructuring more deeply and renaming the keys to avoid collisions
      weight: { imperial: imperialWeight },
      height: { imperial: imperialHeight },
    } = this.props;
    const { favorites } = this.state;

    const weight = imperialWeight + ' pounds.';
    const height = imperialHeight + ' inches.';

    return (
      <div className="breed-card">

        <h3>{name}</h3>
        {this.checkFavorites(name, favorites) &&
          <img className="heart" src={heart} alt="Heart" />
        }
        <Link to={`/breed/${this.props.name}`}>
          <img className='card-dogimage' src={imgUrl} alt={'a ' + name} />
        </Link>
        <ul>
          <section className="breed-stats">
            <li>Weight: {weight}</li>
            <li>Height: {height}</li>
            <li>Life Span: {lifeSpan}</li>
          </section>

          <section className="personality">
            <span className="personality-head">Personality Traits:</span>
            <li>{temperaments}</li>
          </section>
        </ul>

        <section className="links">
          <button onClick={this.openAdoptionTab}>Adopt This breed</button>
          {!this.checkFavorites(name, favorites) &&
            <button onClick={this.handleFavorite}>Add to Favorites</button>}
          {this.checkFavorites(name, favorites) &&
            <button onClick={this.handleDelete}>Remove from Favorites</button>}
        </section>
      </div>
    );
  }
}
