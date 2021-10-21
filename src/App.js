import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import ProfilePage from './ProfilePage';
import ResultsPage from './ResultsPage';
import AboutPage from './AboutPage';
import BreedDetailsPage from './BreedDetailsPage';
//import LoginPage from './LoginPage';
//import SignupPage from './SignupPage';
import AuthPage from './AuthPage.js';
import Favorites from './Favorites';
import './styles/App.css';
import './styles/NavBar.css';

const TOKEN_KEY = 'TOKEN';
export default class App extends Component {
  state = {
    token: localStorage.getItem(TOKEN_KEY) || '',
  };
  handleTokenChange = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({ token: token });
  };

  logout = () => {
    localStorage.clear();
    this.setState({ token: '' });
    <Redirect to="/" />;
  };
  render() {
    return (
      <div>
        <Router>
          <header className="nav-bar">
            <NavLink exact activeClassName="active-link" to="/">
              Profile
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/favorites">
              My Matches
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/results">
              Favorites
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/aboutpage">
              About
            </NavLink>

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
              render={(routerProps) =>
                this.state.token ? (
                  <ProfilePage token={this.state.token} {...routerProps} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => (
                <AuthPage
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => (
                <AuthPage
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/results"
              exact
              render={(routerProps) =>
                this.state.token ? (
                  <ResultsPage token={this.state.token} {...routerProps} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/favorites"
              exact
              render={(routerProps) =>
                this.state.token ? (
                  <Favorites token={this.state.token} {...routerProps} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/aboutpage"
              exact
              render={(routerProps) => <AboutPage token={this.state.token}{...routerProps} />}
            />
            <Route
              path="/breed"
              exact
              render={(routerProps) => <BreedDetailsPage {...routerProps} />}
            />
            <Route
              path="/noprofile"
              exact
              render={(routerProps) => <ProfilePage alert={true} {...routerProps} token={this.state.token}/>}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
