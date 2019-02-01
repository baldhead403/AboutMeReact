import React, { Component } from 'react';
import { underline, bold } from 'ansi-colors';


class Profile extends Component {
    render(){
        return(
            <div>
               <div className="row" id="profile">
               <div className="col-sm-12" id="row1">
                  <div className="col">
                  
                   
                </div> 
                </div>
          
          <div className="col-sm-6">
              <div className="col-sm-6" id="profile-body">
              
                  <underline>

                 <h1> ABOUT ME</h1>
                  </underline>
                    <h5>
                    Experienced Junior Software Developer with a demonstrated history of working in the non-profit organization management industry. 
                    Skilled in Microsoft Client , Microsoft Server Administrator,Mobile Application Development, Web Application Development, Microsoft Server Administration, 
                    Cisco Network Administrator, PC and Network Technician, Analytical Skills, and Accounting. 
                    Strong engineering professional with a Associate of Science (A.S.) focused in Computer Networking and Computer Programming from Atlanta Technical College.    
                    </h5>
              </div>
              <div className="col-sm-6" >
              <div className="col-sm-6" >
                <img src={require('./Images/softDev.jpg')} />
              </div>

              </div>
          </div>
            </div>  
            </div>
        )
    }
}

export default Profile