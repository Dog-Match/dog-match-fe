import React, { Component } from 'react';
import { getProfile, updateProfile } from './fetch-utils';
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
	  console.log(profile, 'profile', this.state);
	};

	handleSubmit = async (e) => {
	  e.preventDefault();
	  // Still need to Get Fresh Dog Rexxx
	  await updateProfile(this.state, this.props.token);
	  this.props.history.push('/ResultsPage');
	};

	render() {
	  console.log(this.state, 'state');
	  return (
	    <div>
	      <header className="profile-header">
	        <h1>Hello, {this.state.user_name}!</h1>
	        <img className="user-icon" src="/dogHeart.png" alt="user icon" />
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
	              placeholder={this.state.user_name}
	              required 
	              onChange={async (e) =>
	              await this.setState({ user_name: e.target.value })}/>
	          </label>

	          <label>
							What state do you live in?
	            <select
	              value={this.state.state}
	              required
	              onChange={async (e) =>
	              await this.setState({ state: e.target.value })}>

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
	            <input
	              placeholder={this.state.zipcode}
	              maxLength="5"
	              required
	              onChange={async (e) =>
	              await this.setState({ zipcode: e.target.value })}/>
	          </label>

	          <label>
							How much time each day can you spend exercising and training?
	            <select
	              value={this.state.time_to_devote}
	              required
	              onChange={async (e) =>
	              await this.setState({ time_to_devote: Number(e.target.value) })} >

	              <option value="3">90 minutes</option>
	              <option value="2">60 minutes</option>
	              <option value="1">30 minutes</option>
	            </select>
	          </label>

	          <label>
							What is your general activity level?
	            <select
	              value={this.state.activity_level}
	              required
	              onChange={async (e) =>
	              await this.setState({ activity_level: Number(e.target.value) })} >

	              <option value="3">Very Active</option>
	              <option value="2">Somewhat Active</option>
	              <option value="1">Not Active</option>
	            </select>
	          </label>

	          <label>
							How much time will your dog spend home alone each day?
	            <select
	              value={this.state.time_dog_at_home}
	              required
	              onChange={async (e) =>
	              await this.setState({ time_dog_at_home: Number(e.target.value) })} >

	              <option value="3">None</option>
	              <option value="2">up to 4 hours</option>
	              <option value="1">5-8 hours</option>
	            </select>
	          </label>

	          <label>
							How much experience do you have with raising dogs?
	            <select
	              value={this.state.experience_with_dogs}
	              required
	              onChange={async (e) =>
	              await this.setState({ experience_with_dogs: Number(e.target.value) })} >

	              <option value="3">Beginner</option>
	              <option value="2">Have had a dog before</option>
	              <option value="1">Have had several dogs</option>
	            </select>
	          </label>

	          <label>
							What size is your dwelling?
	            <select
	              value={this.state.dwelling_size}
	              required
	              onChange={async (e) =>
	              await this.setState({ dwelling_size: Number(e.target.value) })} >
	              <option value="1">Apartment</option>
	              <option value="2">Single Family Home</option>
	              <option value="3">Estate with Acreage</option>
	            </select>
	          </label>

	          <label>
							How busy your household?
	            <select
	              value={this.state.household_size}
	              required
	              onChange={async (e) =>
	              await this.setState({ household_size: Number(e.target.value) })} >

	              <option value="3">Very Quiet</option>
	              <option value="2">Some Activity</option>
	              <option value="1">Lots of coming and going</option>
	            </select>
	          </label>

	          <label>
							Do you have any children under 10 or plan to have any children in
							the next 5 years?
	            <select
	              value={this.state.children_under_10}
	              required
	              onChange={async (e) =>
	              await this.setState({ children_under_10: Number(e.target.value) })} >
                  
	              <option value="1">Yes</option>
	              <option value="0">No</option>
	            </select>
	          </label>

	          <label>
							Does your household include anyone who requires special
							consideration such as an elderly or disabled family member?
	            <select
	              value={this.state.special_consideration}
	              required
	              onChange={async (e) =>
	              await this.setState({ special_consideration: Number(e.target.value) })} >

	              <option value="1">Yes</option>
	              <option value="0">No</option>
	            </select>
	          </label>

	          <label>
							Who will be the main caretaker of the pet?
	            <select
	              value={this.state.main_caretaker}
	              required
	              onChange={async (e) =>
	              await this.setState({ main_caretaker: Number(e.target.value) })} >

	              <option value="2">Kid(s) over 10</option>
	              <option value="1">An Adult (under 60)</option>
	              <option value="3">A Senior (60+)</option>
	              <option value="3">A person with a disability</option>
	            </select>
	          </label>

	          <label>
							Do you have other pets?
	            <select
	              value={this.state.other_pets}
	              required
	              onChange={async (e) =>
	              await this.setState({ other_pets: Number(e.target.value) })} >

	              <option value="2">None</option>
	              <option value="1">Dog (s)</option>
	              <option value="3">Cat (s)</option>
	              <option value="2">Other</option>
	            </select>
	          </label>

	          <label>
							Do you prefer a more protective/guarding breed?
	            <select
	              value={this.state.protective_breed}
	              required
	              onChange={async (e) =>
	              await this.setState({ protective_breed: Number(e.target.value) })} >
                  
	              <option value="2">Yes</option>
	              <option value="1">No</option>
	            </select>
	          </label>
	        </form>

	        <div className="results-button-container">
	          <button className="results-button"> Get Results!</button>
	        </div>
	      </section>
	    </div>
	  );
	}
}
