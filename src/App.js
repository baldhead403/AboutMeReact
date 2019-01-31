import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Title from './Components/Title';
import Profile from './Components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <Title/>
          {/* <img src={require()}/> */}
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
