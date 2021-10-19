import React, { Component } from 'react';
import { signUp } from './fetch-utils.js';

export default class SignupPage extends Component {
  state = {
    password: '', 
    email: ''
  }

  handleSubmit = async e => {
    e.preventDefault(); 
    const { token } = await signUp(this.state.email, this.state.password);
    this.props.handleTokenChange(token); 
    this.props.history.push('/');
  }

  render() {
    return (
      
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
                        Email:
            <input value={this.state.email} onChange={(e)=> this.setState({ email: e.target.value })} type = 'email'/> 
          </label>
          <label>
                Password:
            <input value={this.state.password} onChange={(e)=> this.setState({ password: e.target.value })} type = 'password'/> 
          </label>
          <button>Sign Up</button>
        </form>
      </div>

    );
  }
}

