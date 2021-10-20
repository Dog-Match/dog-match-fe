import React, { Component } from 'react';
import BreedCard from './components/BreedCard.js';
import { getRecommendations } from './fetch-utils.js';
import './styles/Results.css';

export default class ResultsPage extends Component {

  state = {
    loading: true,
    breeds: []
  }

  
  componentDidMount = async () => {
    const breeds = await getRecommendations(this.props.token);
    this.setState({ breeds, loading: false });
  }

  render() {
    const { loading, breeds } = this.state;
    if (loading) {
      return (
        <h2>Loading Your Personalized Results...</h2>
      );
    } else {
      return (
        <div className="results-page">
          {breeds.map(breed => <BreedCard {...breed} />)}
        </div>
      );
    }
  }
}
