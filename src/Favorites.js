import React, { Component } from 'react';
import { getFavorites } from './fetch-utils';
import BreedCard from './components/BreedCard';
import './styles/Favorites.css';
export default class Favorites extends Component {
    state = {
      favorites: [],
      loading: true
    }
    componentDidMount = async () => {
      try {
        const favorites = await getFavorites(this.props.token);
        this.setState({ favorites, loading: false });
      } catch(e) {
        if(e.message === 'fill out profile first') {
          this.props.history.push('/noprofile');
        }
      }
    }
    render() {
      const { loading, breeds } = this.state;
      if (loading) {
        return (
          <h2 className="loading">Loading Your Personalized Results...</h2>
        );
      } else {
        return (
          <div className='favorites-page'>
            {this.state.favorites.map(favorite => <BreedCard {...favorite} key={favorite.id} token={this.props.token}/>)}
          </div>
        );
      }
    }
}
