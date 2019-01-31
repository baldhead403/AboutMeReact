import React, { Component } from 'react';
import { underline, bold } from 'ansi-colors';

class Profile extends Component {
    render(){
        return(
            <div>
               <div class="row" id="profile">
               <div class="col-sm-12" id="row1">
                  <div class="col-sm-12">
                    <h1>ABOUT ME</h1>
                </div> 
                </div>
          
          <div class="col-sm-4">
              <div class="col-sm-10">
          <p>
          Experienced Junior Software Engineer with a demonstrated history of working in the non-profit organization management industry. 
          Skilled in Microsoft Client , Microsoft Server Administrator, Analytical Skills, Mobile Application Development, Web Application Development, Server Administration, 
          Cisco Network Administrator, PC and Network Technician  and Accounting. 
          Strong engineering professional with a Associate of Science (A.S.) focused in System, Networking, and LAN/WAN Management/Manager and Computer from Atlanta Technical College.    
         </p>
              </div>
          </div>
            </div>
             
            </div>
        )
    }
}

export default Profile