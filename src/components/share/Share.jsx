import React from 'react'
import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import './Share.css';

export default function Share() {
  return (
    <div>
      <div className="share">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className='shareProfileImg' />
          <input
            type="text"
            className='shareInput'
            placeholder='What are you doing?'
          />
        </div>
        <hr className='shareHr' />

        <div className="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className='shareIcon' htmlColor='blue' />
              <span className='shareOptionText' >Image</span>
            </div>
            <div className="shareOption">
              <Gif className='shareIcon' htmlColor='hotpink' />
              <span className='shareOptionText' >GIF</span>
            </div>
            <div className="shareOption">
              <Face className='shareIcon' htmlColor='green' />
              <span className='shareOptionText' >Feeling</span>
            </div>
            <div className="shareOption">
              <Analytics className='shareIcon' htmlColor='red' />
              <span className='shareOptionText' >Votes</span>
            </div>
          </div>
          <button className='shareButton'>Post</button>
        </div>
      </div>
    </div>
  )
}
