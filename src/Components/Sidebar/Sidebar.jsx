import React from 'react';
import './sidebar.css'
import {LineStyleOutlined,
    TimelineOutlined,
    TrendingUpOutlined,
    HomeOutlined,
    ReportProblemOutlined,
    DomainOutlined,
    MonetizationOnOutlined,
    MailOutlineOutlined,
    ControlCameraOutlined,
    MessageOutlined,
    FeedbackOutlined,
    ReportOffOutlined,
    AccountCircleOutlined} from '@material-ui/icons';


function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Admin_Dash</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem active'>
                    <HomeOutlined className='sideBarListItemLogo'/>
                    Home
                </li>
                <li className='sideBarListItem'>
                    <TimelineOutlined className='sideBarListItemLogo'/>
                    Analitycs
                </li>
                
                <li className='sideBarListItem'>
                    <TrendingUpOutlined className='sideBarListItemLogo'/>
                    Sales
                </li>
            </ul>
          </div>
         
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick_Menu</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <AccountCircleOutlined className='sideBarListItemLogo'/>
                    Users
                </li>
                <li className='sideBarListItem'>
                    <DomainOutlined className='sideBarListItemLogo'/>
                    Products
                </li>
                <li className='sideBarListItem'>
                    <MonetizationOnOutlined className='sideBarListItemLogo'/>
                    Transactions
                </li>
                <li className='sideBarListItem'>
                    <ReportOffOutlined className='sideBarListItemLogo'/>
                    Reports
                </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <MailOutlineOutlined className='sideBarListItemLogo'/>
                    Mail
                </li>
                <li className='sideBarListItem'>
                    <FeedbackOutlined className='sideBarListItemLogo'/>
                    Feedback
                </li>
                <li className='sideBarListItem'>
                    <MessageOutlined className='sideBarListItemLogo'/>
                    Messages
                </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className='sideBarList'>
                <li className='sideBarListItem'>
                    <ControlCameraOutlined className='sideBarListItemLogo'/>
                    Manage
                </li>
                <li className='sideBarListItem'>
                    <LineStyleOutlined className='sideBarListItemLogo'/>
                    Analitycs
                </li>
                <li className='sideBarListItem'>
                    <ReportProblemOutlined className='sideBarListItemLogo'/>
                    Reports
                </li>
            </ul>
          </div>
          
      </div>
  </div>;
}

export default Sidebar;
