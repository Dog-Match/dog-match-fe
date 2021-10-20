import React, { Component } from 'react';
import { getFavorites } from './fetch-utils';
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
      return (
        <div className='all-favorites'>
          {this.state.favorites.map(item =>
            <div className='favorite' key={item.id}>
              <img src={item.image.url} alt=''/>
              <p>Name: {item.name}</p>
              <p>Bred for: {item.bred_for}</p>
              <p>Life Span: {item.life_span}</p>
              <p>Temperament: {item.temperament}</p>      
            </div>)}
        </div>
      );
    }
}
