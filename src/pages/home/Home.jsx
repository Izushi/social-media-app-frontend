import React from 'react';
import './Home.css';
import TopBar from '../../components/top_bar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import RightBar from '../../components/right_bar/RightBar';

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
        <Timeline />
        <RightBar />
      </div>
    </>
  )
}
