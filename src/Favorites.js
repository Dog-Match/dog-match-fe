import React, { Component } from 'react';
import { getFavorites } from './fetch-utils';
import BreedCard from './components/BreedCard';
export default class Favorites extends Component {
    state = {
      favorites: []
    }
    componentDidMount = async () => {
      try {
        const favorites = await getFavorites(this.props.token);
        this.setState({ favorites });
      } catch(e) {
        if(e.message === 'fill out profile first') {
          this.props.history.push('/noprofile');
        }
      }
    }
    render() {
      console.log(this.state.favorites);
      return (
        <div className='favorites-page'>
          {this.state.favorites.map(favorite => <BreedCard {...favorite} key={favorite.id} token={this.props.token}/>)}
        </div>
      );
    }
}
