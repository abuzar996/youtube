import React from 'react'
import './sidebar.styles.css';
const sidebar = () => {
  return (
    <div>
      <div>
        
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Library</li>
          <li>History</li>
        </ul>
      </div>
      <div>
        <div>Sign in to like videos,</div>
        <div>comment and subscribe.</div>
        <div >
          <button className='sign-button'>
            <img className='icon' src={"https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png"} alt='user'/>
            <span> Sign In</span>
          </button>
        </div>
      </div>
      <div>
        <h3>Explore</h3>
        <ul>
          <li>Trending</li>
          <li>Music</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
        </ul>
      </div>
      <div>
        <button>Browse Channels</button>
      </div>
      <div>
        <h3>
          More from YouTube
        </h3>
        <ul>
          <li>YouTube Kids</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Settings</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar