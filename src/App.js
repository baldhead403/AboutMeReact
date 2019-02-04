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
          <div className="">
            <Title/>
          </div>  
        </header>
        <div>
          <header className="profile-head">
              <Profile/>
          </header>
        </div>

        <div className="row">
          <div className="col font-effect-3d" id="programs">
            <img src={require('./Images/programming.jpg')} alt=""/>
              <h4>
                Computer Programmer
              </h4>
          </div>
          <div className="col font-effect-3d" id="pcrepair">
            <img src={require('./Images/remote-support.jpg')} alt=""/>
              <h4>
                PC Repair and Maintainance
              </h4>
          </div>
          <div className="col font-effect-3d" id="network">
            <img src={require('./Images/computer-networking.jpg')} alt=""/>
              <h4>
                Network Technician
              </h4>
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
