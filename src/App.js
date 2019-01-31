import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import profile_pic from './Images/profile_pic.jpg'
import Title from './Components/Title';
// import Profile from './Components/Profile'

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
      </div>
    );
  }
}
// class Info extends Component{
//   render(){
//     return(
//       <body>

//       <div>
//         <Title/>
//         {/* <img src={require()}/> */}
//       </div>
//       </body>
//     )
//   }
// }


export default App;
