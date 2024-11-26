import React from 'react'

export default function Topbar() {
  return <div className='topbarContainer'>
    <div className="topbarLeft">
      <span className="logo">Social Media App</span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <input
          type="text"
          className='searchInput'
          placeholder='What are you looking for?'
        />
      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarIconItem">1</div>
      <div className="topbarIconItem">2</div>
    </div>
    <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
  </div>;
}