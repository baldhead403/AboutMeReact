import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import Footer from './Components/Footer'
import Title from './Components/Title';
import Profile from './Components/Profile'
library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Title/>
          </div>  
        </header>
        <div>
          <header className="profile-head">
              <Profile/>
          </header>
        </div>

        <div className="row">
          <div className="col" id="pcrepair">
              <h4>
                PC Repair and Maintainance
              </h4>
          <img src={require('./Images/remote-support.jpg')}/>
          </div>
          <div className="col" id="pcrepair">
              <h4>
                Networ Technician
              </h4>
          <img src={require('./Images/computer-networking.jpg')}/>
          </div>
          

        </div>

        <div>
          <header>

              <Footer/>
          </header>

        </div>
      </div>
    );
  }
}



export default App;
