import React from 'react'
import { Chat, Notifications, Search } from '@mui/icons-material';
import './TopBar.css';

export default function TopBar() {
  return (
  <div className='topBarContainer'>
    <div className="topBarLeft">
      <span className="logo">Social Media App</span>
    </div>
    <div className="topBarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input
          type="text"
          className='searchInput'
          placeholder='What are you looking for?'
        />
      </div>
    </div>
    <div className="topBarRight">
      <div className='topBarItemIcons'>
        <div className="topBarIconItem">
          <Chat />
          <span className="topBarIconBadge">1</span>
        </div>
        <div className="topBarIconItem">
          <Notifications />
          <span className="topBarIconBadge">2</span>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topBarImg' />
      </div>
    </div>
  </div>
  );
}
