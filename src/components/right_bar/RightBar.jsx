import React from 'react';
import './RightBar.css';

export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className='starImg' />
          <span className="eventText">
            <b>Now holding followers-only event</b>
          </span>
        </div>
        <img src="assets/event.jpeg" alt="" className='eventImg' />
        <h4 className='rightBarTitle'>Friends online</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img src="assets/person/1.jpeg" alt="" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Daz</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
