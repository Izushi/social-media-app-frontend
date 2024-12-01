import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Message</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
        </ul>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="./assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Daz</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/4.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Daichi</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/3.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Brandon</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
