import React, { Component } from 'react';
import { getProfile, updateProfile } from './fetch-utils';
import icon from './img/dogHeart.png';
import states from './states';
import './styles/Profile.css';

export default class ProfilePage extends Component {
  state = {
    user_name: '',
    zipcode: '',
    state: 'AL',
    energy_score: 0,
    owner_exp_score: 0,
    guard_score: 0,
    time_to_devote: '3',
    activity_level: '3',
    time_dog_at_home: '3',
    experience_with_dogs: '3',
    dwelling_size: '1',
    household_size: '3',
    children_under_10: '1',
    special_consideration: '1',
    main_caretaker: '2',
    other_pets: '2',
    protective_breed: '2',
  };

  componentDidMount = async () => {
    const { token } = this.props;
    const profile = await getProfile(token);
    this.setState({ ...profile[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // Still need to Get Fresh Dog Rexxx
    await updateProfile(this.state, this.props.token);
    this.props.history.push('/results');
  };

  render() {
    return (
      <div className='content'>
        {this.props.alert &&
          <h2 className="profile-alert">Please Answer All Questions Before Continuing</h2>  }
        <header className="profile-header">
          <h1>Hello {this.state.user_name}!</h1>
          <img className="user-icon" src={icon} alt="user icon" />
        </header>

        <div className="profile-subhead">
          <p>Your Dog Owner Profile</p>
        </div>

        <section className="profile-content">
          {/* Quiz Questions */}
          <form className="profile-quiz" onSubmit={this.handleSubmit}>

            <label>
              What is your name?
              <input
                value={this.state.user_name}
                required
                onChange={async (e) =>
                  await this.setState({ user_name: e.target.value })} />
            </label>

            <label>
              What state do you live in?
              <select
                value={this.state.state}
                required
                onChange={async (e) =>
                  await this.setState({ state: e.target.value })}>
                {/* probably a good idea for this data to live elsewhere to keep your component clean */}
                { states.map(({abbreviation, displayName}) => 
                <option value={abbreviation}>
                  {displayName}
                </option>)}

              </select>
            </label>

            <label>
              What is your zip code?
              <input
                value={this.state.zipcode}
                maxLength="5"
                required
                onChange={async (e) =>
                  await this.setState({ zipcode: e.target.value })} />
            </label>

                  {/* Since there's a lot of repetition below, 
                      these dropdowns should probably be componentized 
                      to look something like this:
                  */}
                    <Dropdown
                        text=' How much time each day can you spend exercising and training?'
                        options={[
                          {value: 3, display: '90 minutes' },
                          {value: 2, display: '60 minutes' },
                          {value: 1, display: '30 minutes' }
                        ]}
                        value={this.state.time_to_devote}
                        onChange={
                          async (e) =>
                          await this.setState({ 
                            time_to_devote: Number(e.target.value)
                        })
                      }
                  />                  
                  <Dropdown
                        text=' How much time each day can you spend exercising and training?'
                        options={[
                          {value: 3, display: '90 minutes' },
                          {value: 2, display: '60 minutes' },
                          {value: 1, display: '30 minutes' }
                        ]}
                        value={this.state.time_to_devote}
                        onChange={
                          async (e) =>
                          await this.setState({ 
                            time_to_devote: Number(e.target.value)
                        })
                      }
                  />
                  <Dropdown
                        text=' How much time each day can you spend exercising and training?'
                        options={[
                          {value: 3, display: '90 minutes' },
                          {value: 2, display: '60 minutes' },
                          {value: 1, display: '30 minutes' }
                        ]}
                        value={this.state.time_to_devote}
                        onChange={
                          async (e) =>
                          await this.setState({ 
                            time_to_devote: Number(e.target.value)
                        })
                      }
                  />
                  <Dropdown
                        text=' How much time each day can you spend exercising and training?'
                        options={[
                          {value: 3, display: '90 minutes' },
                          {value: 2, display: '60 minutes' },
                          {value: 1, display: '30 minutes' }
                        ]}
                        value={this.state.time_to_devote}
                        onChange={
                          async (e) =>
                          await this.setState({ 
                            time_to_devote: Number(e.target.value)
                        })
                      }
                  />
                  <Dropdown
                        text=' How much time each day can you spend exercising and training?'
                        options={[
                          {value: 3, display: '90 minutes' },
                          {value: 2, display: '60 minutes' },
                          {value: 1, display: '30 minutes' }
                        ]}
                        value={this.state.time_to_devote}
                        onChange={
                          async (e) =>
                          await this.setState({ 
                            time_to_devote: Number(e.target.value)
                        })
                      }
                  />
                  <Dropdown
                        text=' How much time each day can you spend exercising and training?'
                        options={[
                          {value: 3, display: '90 minutes' },
                          {value: 2, display: '60 minutes' },
                          {value: 1, display: '30 minutes' }
                        ]}
                        value={this.state.time_to_devote}
                        onChange={
                          async (e) =>
                          await this.setState({ 
                            time_to_devote: Number(e.target.value)
                        })
                      }
                  />
                {/* etc . . . Obviously I'm faking the props here, but you get the point. Might even be nice to store much of this data in an array and map over it to create dropdowns dynamically, since this form is pretty predictably generated off of a stable data model */}

            <div className="results-button-container">
              <button className="results-button">Get Results!</button>
            </div>
          </form>

        </section>
      </div>
    );
  }
}
