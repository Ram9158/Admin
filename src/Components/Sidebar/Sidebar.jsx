import React from 'react';
import './sidebar.css'
import {LineStyle,Timeline,TrendingUp} from '@material-ui/icons';


function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin-Dash</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <LineStyle className='sideBarListItemLogo'/>
                    Home
                </li>
                <li className='sideBarListItem'>
                    <Timeline className='sideBarListItemLogo'/>
                    Analitycs
                </li>
                <li className='sideBarListItem'>
                    <TrendingUp className='sideBarListItemLogo'/>
                    Sales
                </li>
            </ul>
          </div>
         
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin-Dash</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <LineStyle className='sideBarListItemLogo'/>
                    Home
                </li>
                <li className='sideBarListItem'>
                    <Timeline className='sideBarListItemLogo'/>
                    Analitycs
                </li>
                <li className='sideBarListItem'>
                    <TrendingUp className='sideBarListItemLogo'/>
                    Sales
                </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin-Dash</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <LineStyle className='sideBarListItemLogo'/>
                    Home
                </li>
                <li className='sideBarListItem'>
                    <Timeline className='sideBarListItemLogo'/>
                    Analitycs
                </li>
                <li className='sideBarListItem'>
                    <TrendingUp className='sideBarListItemLogo'/>
                    Sales
                </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin-Dash</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <LineStyle className='sideBarListItemLogo'/>
                    Home
                </li>
                <li className='sideBarListItem'>
                    <Timeline className='sideBarListItemLogo'/>
                    Analitycs
                </li>
                <li className='sideBarListItem'>
                    <TrendingUp className='sideBarListItemLogo'/>
                    Sales
                </li>
            </ul>
          </div>
      </div>
  </div>;
}

export default Sidebar;
