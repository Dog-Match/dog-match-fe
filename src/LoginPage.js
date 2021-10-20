import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from './fetch-utils.js'; 
import './styles/Login.css';


export default class LoginPage extends Component {
    state = {
      password: '', 
      email: ''
    }

    handleSubmit = async e => {
      e.preventDefault(); 
      const { token } = await login(this.state.email, this.state.password);
      this.props.handleTokenChange(token); 
      this.props.history.push('/');
    }

    render() {
      return (
        <div>
          <header className='login-header'>
            <h1>Dog Match App Title</h1>
            <img src='./dog-food.png' alt="paw logo"/><br/>
            hingamajig the doggo matcher
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
              <span className='button-container'>
                <Link to ="/signup"><button>New user? Sign up!</button></Link>
                <button className='login-button'> Login </button>
              </span>           
            </form>
          </section>
        </div>
      );
    }
}
