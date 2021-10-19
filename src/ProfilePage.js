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
              <input value={this.state.user_name} onChange={async(e) => await this.setState({ name: e.target.value })} required />
            </label>

            <label>
              What state do you live in?
              <select value={this.state.state} onChange={async(e) => await this.setState({ state: e.target.value })}>
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
              <input value={this.state.zip_code} maxlength="5" required />
            </label>

            <label>
              How much time each day can you spend exercising and training?
              <select value={this.state.time_to_devote} onChange={async(e) => await this.setState({ time_to_devote: Number(e.target.value) })} required>
                <option value ='3'>90 minutes</option>
                <option value ='2'>60 minutes</option>
                <option value ='1'>30 minutes</option>
              </select>
            </label>

            <label>
              What is your general activity level?
              <select value={this.state.activity_level} onChange={async(e) => await this.setState({ activity_level: Number(e.target.value) })} required>
                <option value ='3'>Very Active</option>
                <option value ='2'>Somewhat Active</option>
                <option value ='1'>Not Active</option>
              </select>
            </label>

            <label>
              How much time will your dog spend home alone each day?
              <select value={this.state.time_dog_at_home} onChange={async(e) => await this.setState({ time_dog_at_home: Number(e.target.value) })} required>
                <option value ='3'>None</option>
                <option value ='2'>up to 4 hours</option>
                <option value ='1'>5-8 hours</option>
              </select>        
            </label>

            <label>
              How much experience do you have with raising dogs?
              <select value={this.state.time_dog_at_home} onChange={async(e) => await this.setState({ time_dog_at_home: Number(e.target.value) })} required>
                <option value ='3'>None ◦ Beginner</option>
                <option value ='2'>Intermediate ◦ Have had a dog before</option>
                <option value ='1'>Pro ◦ Have had several dogs</option>
              </select>        
            </label>

            <label>
              What size is your dwelling?
              <select value={this.state.dwelling_size} onChange={async(e) => await this.setState({ dwelling_size: Number(e.target.value) })} required>
                <option value ='1'>Apartment</option>
                <option value ='2'>Single Family Home</option>
                <option value ='3'>Estate with Acreage</option>
              </select>        
            </label>

            <label>
              How large is your household?
              <select value={this.state.household_size} onChange={async(e) => await this.setState({ household_size: Number(e.target.value) })} required>
                <option value ='3'>Just myself ◦ Very Quiet</option>
                <option value ='2'>Myself +1 other ◦ Some Activity</option>
                <option value ='1'>3+ ◦ Lots of coming and going</option>
              </select>        
            </label>

            <label>
              Do you have any children under 10 or plan to have any children in the next 5 years?
              <select value={this.state.children_under_10} onChange={async(e) => await this.setState({ children_under_10: Number(e.target.value) })} required>
                <option value ='1'>Yes</option>
                <option value ='0'>No</option>
              </select>        
            </label>

            <label>
              Does your household include anyone who requires special consideration such as an elderly or disabled family member?
              <select value={this.state.special_consideration} onChange={async(e) => await this.setState({ special_consideration: Number(e.target.value) })} required>
                <option value ='1'>Yes</option>
                <option value ='0'>No</option>
              </select>        
            </label>

            <label>
              Who will be the main caretaker of the pet?
              <select value={this.state.special_consideration} onChange={async(e) => await this.setState({ special_consideration: Number(e.target.value) })} required>
                <option value ='2'>Kid(s) over 10</option>
                <option value ='1'>An Adult (under 60)</option>
                <option value ='3'>A Senior (60+)</option>
                <option value ='3'>A person with a disability</option>
              </select>        
            </label>

          </form>
        </section>
      </div>
    );
  }
}
