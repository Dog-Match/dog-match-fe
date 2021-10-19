import React, { Component } from 'react';
import './styles/profile.css';

export default class ProfilePage extends Component {
  
  state = {
    user_name: '',
    zip_code:'',
    state:'',
    energy_score: 0,
    owner_exp_score: 0,
    guard_score: 0,
    time_to_devote: '',
    activity_level: '',
    time_dog_at_home: '',
    experience_with_dogs: '',
    dwelling_size: '',
    household_size: '',
    children_under_10: '',
    special_consideration: '',
    main_caretaker: '',
    other_pets: '',
    protective_breed: ''
  }

  render() {

    const username = this.state.user_name;

    return (
      <div>
        <header className = "profile-header">
          <h1>Hello, {username}Taylor!</h1>
          <img className = "user-icon" src="/dogHeart.png" alt="user icon"/>
        </header>

        <div className = "profile-subhead">
          <p>Your Dog Owner Profile</p>
        </div>

        <section className = "profile-content">

          {/* Quiz Questions */}
          <form className = "profile-quiz">

            <label>
              What is your name?
              <input onChange={async(e) => await this.setState({ name: e.target.value })} required />
            </label>

            <label>
              What state do you live in?
              <select onChange={async(e) => await this.setState({ state: e.target.value })}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>		
		        </label>

            <label>
              What is your zip code?
              <input pattern='[0-9]{5}' maxlength="5" required />
            </label>

            <label>
              How much time each day can you spend exercising and training?
              <input onChange={async(e) => await this.setState({ time_to_devote: e.target.value })} required />
            </label>
          </form>
        </section>
      </div>
    );
  }
}
