import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import li_scaled_profile_picture from './Images/li_scaled_profile_picture.jpg'
import { Button } from 'reactstrap';
import Title from './Components/Title';
import Profile from './Components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
        <h1>ABOUT ME</h1>
          <div>
            <div>
          
          <img src={require("./Images/li_scaled_profile_picture.jpg")}/>
          </div>
          </div>

          <Title/>
        </div>  
        </header>
        <div>
        <Profile/>
      </div>
      </div>
    );
  }
}



export default App;
