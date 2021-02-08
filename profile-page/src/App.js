import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import Profile from './Profile.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [
        {
        name: "Name",
        username: "Username",
        user_img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboundingintocomics.com%2Ffiles%2F2018%2F02%2FThor-Hammer.png&f=1&nofb=1",
        profile: "This is a profile"
        },
        {
          name: "Name2",
          username: "Username2",
          user_img_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboundingintocomics.com%2Ffiles%2F2018%2F02%2FThor-Hammer.png&f=1&nofb=1",
          profile: "This is a profile2"
        }
      ]
    }
  }

  render() {
    return (
      <div className = "Profile">
        {this.state.profile.map(person => <Profile name = {person.name} username = {person.username} img = {person.user_img_url} profile = {person.profile} /> )}
      </div>
    )
  }


}




export default App;
