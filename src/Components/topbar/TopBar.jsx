import React from "react";
import "./TopBar.css"
// import Avtarimg from './admin.jpg'
import {Notifications,SupervisorAccount,Language,Settings} from '@material-ui/icons';

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topLeft">
            <SupervisorAccount/>
         <span className="logo">
            Admin
         </span>
        </div>
        <div className="topRight">

          <div className="toggleIconContainer">
            <Language/>
          </div>
          <div className="toggleIconContainer">
            <Settings/>
          </div>
          <div className="toggleIconContainer">
            <Notifications/>
            <span className="iconBadge ">7+</span>
          </div>
         
             {/* <img src={Avtarimg} alt="Avtar" className="TopAvtar"/> */}
          
        </div>
      </div>
    </div>
    
  )
}

export default TopBar;
