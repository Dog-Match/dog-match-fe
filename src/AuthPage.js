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
    invalidEmail: false // I would keep this key as a 'negative' to fit with the others
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
    if (invalidEmail) return;
    const result = await signIn(email, password);
    this.handleAuthResult(result);
  }

  handleSignUp = async (e) => {
    const { email, password, validEmail } = this.state;
    if (invalidEmail) return;
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
    const validEmail = email.isValid(input); // woah! not sure what's happening here. does isValid just live on the String object in javascript, then looks at the input to decide how to validate it??
    this.setState({ email: input, invalidEmail: !validEmail });
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
      invalidEmail,
      noCreds,
      emailTaken
    } = this.state;

    // kind of doing a lot here, but I'm trying to destructure the key out of the [key, value] array that is found in this Object.entries, to get the key of the erro message whose value is true. Then I use this key below to get the right message from the object. Might be a bit much, and in retrospect, probably not better than your more intuitive solution. But hey, kind of neat, right?!
    const [errorTypeKey] = Object
      .entries(this.state)
      .find(([key, value]) => value === true);

    // might be nice to use an object here instead of a string of conditions if you're sure you'll only get more than one error
    const messages = {
      noCreds: 'Please Enter Your Email and Password',
      badCreds: 'Incorrect Email or Password',
      error: 'Network Error',
      invalidEmail: 'Invalid Email',
      emailTaken: 'Email In Use, Please Log In',
    }

    return messages[errorTypeKey] || '\u00a0\u00a0';
  }

 {
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