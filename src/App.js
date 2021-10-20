import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import ProfilePage from './ProfilePage';
import ResultsPage from './ResultsPage';
import AboutPage from './AboutPage';
import BreedDetailsPage from './BreedDetailsPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import NavBar from './NavBar';
import './styles/App.css';

const TOKEN_KEY = 'TOKEN';
export default class App extends Component {
  state = {
    token: localStorage.getItem(TOKEN_KEY) || ''
  }
    handleTokenChange = token => {
      localStorage.setItem(TOKEN_KEY, token);
      this.setState({ token: token });
    }
  
    logout = () => {
      localStorage.clear();
      this.setState({ token: '' });
      // this.state.history.push('/');
    }
    render() {
      return (
        <div>         
          <Router>
            <header className='nav-bar'>
              <NavLink exact activeClassName='active-link' to="/">Profile</NavLink>

              {/* Dummy Link */}
              <NavLink exact activeClassName='active-link' to="/">Favorites</NavLink>

              {/* Dummy Link */}
              <NavLink exact activeClassName='active-link' to="/">Matches</NavLink>

              {this.state.token && (
                <button className="logout-button" onClick={this.logout}>
								Log Out
                </button>
              )}
            </header>

            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => this.state.token ? <ProfilePage token = {this.state.token}{...routerProps}/> : <Redirect to = "/login"/> }/>
              <Route path="/signup"
                exact
                render={(routerProps) => <SignupPage handleTokenChange = {this.handleTokenChange} {...routerProps}/> }/>
              <Route path="/login" 
                exact
                render={(routerProps) => <LoginPage handleTokenChange = {this.handleTokenChange} {...routerProps}/> }/>
              <Route
                path="/results"
                exact
                render={(routerProps) => this.state.token ? <ResultsPage token = {this.state.token}{...routerProps}/> : <Redirect to = "/auth"/> }/>
              <Route
                path="/aboutus"
                exact
                render={(routerProps) => <AboutPage {...routerProps}/>}/>
              <Route 
                path="/breed"
                exact
                render={(routerProps) => <BreedDetailsPage {...routerProps}/>}/>
            </Switch>          
          </Router>
        </div>
      );
    }
}


