import React, { Component } from 'react';
import './App.css';
import { underline, bold } from 'ansi-colors'

import Title from './Components/Title';
import Profile from './Components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <div>
            <div>
          
         
          </div>
          </div>

          <Title/>
        </div>  
        </header>
        <div>
          <header className="profile-head">
        

         <Profile/>
          </header>
      </div>
      </div>
    );
  }
}



export default App;
