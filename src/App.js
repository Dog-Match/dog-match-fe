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
import NavBar from './NavBar';
import AuthPage from './AuthPage';
import './App.css';

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
    }
    render() {
      return (
        <div>
         
          <Router>
            <header>
              <NavLink exact activeClassName='active-link' to="/">Home</NavLink>
            </header>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => this.state.token ? <ProfilePage token = {this.state.token}{...routerProps}/> : <Redirect to = "/auth"/> }/>
              <Route
                path="/auth"
                exact
                render={(routerProps) => <AuthPage
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps}/>}/>
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


