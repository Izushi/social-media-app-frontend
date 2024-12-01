import React from 'react'
import { Chat, Notifications, Search } from '@mui/icons-material';
import './Topbar.css';

export default function Topbar() {
  return (
  <div className='topbarContainer'>
    <div className="topbarLeft">
      <span className="logo">Social Media App</span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input
          type="text"
          className='searchInput'
          placeholder='What are you looking for?'
        />
      </div>
    </div>
    <div className="topbarRight">
      <div className='topbarItemIcons'>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">2</span>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
      </div>
    </div>
  </div>
  );
}
