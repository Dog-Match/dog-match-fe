import React, { Component } from 'react';

export default class ProfilePage extends Component {
  
  state = {
    energy_score: 0,
    owner_exp_score: 0,
    guard_score: 0,
    user_name: '',
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
    protective_breed: '',
  }

  render() {

    const username = this.state.user_name;

    return (
      <div className = "profile-header">
        <h1>Hello, {username}!</h1>
        <img src="/dogHeart.png" alt="user icon" height="50px"></img>
      </div>
    );
  }
}
