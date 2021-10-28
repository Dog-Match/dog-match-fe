import React, { Component } from 'react';
import BreedCard from './components/BreedCard.js';
import { getRecommendations } from './fetch-utils.js';
import './styles/Results.css';
import './styles/App.css';

export default class ResultsPage extends Component {

  state = {
    loading: true,
    breeds: []
  }

  
  componentDidMount = async () => {
    try {
      const breeds = await getRecommendations(this.props.token);
      this.setState({ breeds, loading: false });
    } catch(e) {
      // nice! it can get confusing passing custom error messages to the front end like this, so nice job. I would like to see this set into state then displayed to the user, though
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
        <div className="results-page">
          {breeds.map(breed => <BreedCard {...breed} key={breed.id} token={this.props.token}/>)}
        </div>
      );
    }
  }
}
