import React, { Component } from 'react';
import { email } from '@sideway/address';
import { signIn, signUp } from './fetch-utils.js';
import foodBowl from './img/dog-food.png';
import './styles/Auth.css';

export default class LoginPage extends Component {

  state = {
    email: '',
    password: '',
    badCreds: false,
    noCreds: false,
    error: false,
    emailTaken: false,
    validEmail: true
  }

  handleAuthResult(result) {
    if (!result.error && !result.badCreds && !result.noCreds && !result.emailTaken) {
      this.props.handleTokenChange(result.token);
      this.props.history.push('/');
    } else {
      this.setState({ ...result });
    }

  }
  handleSignIn = async (e) => {
    const { email, password, validEmail } = this.state;
    if (!validEmail) return;
    const result = await signIn(email, password);
    this.handleAuthResult(result);
  }

  handleSignUp = async (e) => {
    const { email, password, validEmail } = this.state;
    if (!validEmail) return;
    const result = await signUp(email, password);
    this.handleAuthResult(result);
  }

  clearErrorState = () => {
    this.setState({
      badCreds: false,
      noCreds: false,
      error: false,
      emailTaken: false
    });
  }

  handleEmailChange = (e) => {
    const input = e.target.value;
    const validEmail = email.isValid(input);
    this.setState({ email: input, validEmail });
    this.clearErrorState();
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
    this.clearErrorState();
  }

  getErrorString = () => {
    const {
      error,
      badCreds,
      validEmail,
      noCreds,
      emailTaken
    } = this.state;
    let string = '\u00a0\u00a0'; //makes react render white space
    if (noCreds) string = 'Please Enter Your Email and Password';
    if (badCreds) string = 'Incorrect Email or Password';
    if (error) string = 'Network Error';
    if (!validEmail) string = 'Invalid Email';
    if (emailTaken) string = 'Email In Use, Please Log In';
    return string;
  }

  render() {
    const {
      email,
      password,
    } = this.state;
    const errorString = this.getErrorString();
    
    return (
      <div>
        <header className='login-header'>
          <h1>Dog Match</h1>
          <img src={foodBowl} alt="paw logo" /><br />
          Helping People Find the Best Type of Love
        </header>
        <section className='login-container'>
          <span>Please Sign Up or Sign In to Continue</span>
          <div className="auth-error-div">
            <span>{errorString}</span>
          </div>
          <label>
            Email:
            <input value={email} onChange={this.handleEmailChange} type='email' />
          </label>
          <label>
            Password:
            <input value={password} onChange={this.handlePasswordChange} type='password' />
          </label>
          <span className='button-container'>
            <button onClick={this.handleSignUp}>Sign Up</button>
            <button onClick={this.handleSignIn} className='login-button'>Sign In</button>
          </span>
        </section>
      </div>
    );
  }
}