import React, { Component } from 'react';
import { signUp } from './fetch-utils.js';
import './styles/Login.css';
import collar from './img/dog-collar.png';

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
    console.log(this.state, 'this.state');
    return (
      
      <div>
        <header className='login-header'>
          <h1>Dog Match App Title</h1>
          <img src= { collar } alt="paw logo"/><br/>
            Sign up for a new account!
        </header>
        <section className='login-container'>
          <form onSubmit={this.handleSubmit} className='login-form'>
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
        </section>
      </div>

    );
  }
}

