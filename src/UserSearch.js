import React, { Component } from 'react';
import { searchBreeds } from './fetch-utils';

export default class UserSearch extends Component {
    state = {
      results: [],
      query: ''
    }

    componentDidMount = async () => {
        
    }

    /* handleSubmit = async () => {
        const results = await searchBreeds(this.state.query, )
    }*/
    render() {
      

      return (
        <div>
          <form onSubmit={this.handleSubmit} className='search-form'>
            <label>Search for Dog Breeds: <input onChange={async(e) => await this.setState({ query: e.target.value })}/></label>
          </form>
        </div>
      );
    }
}
