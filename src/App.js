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
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
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
              Favorites
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/results">
              My Matches
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/aboutus">
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
                <SignupPage
                  handleTokenChange={this.handleTokenChange}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => (
                <LoginPage
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
              render={(routerProps) => <AboutPage {...routerProps} />}
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
