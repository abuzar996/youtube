import React from 'react'
import Sidebar from '../Sidebar';
import Menu from '../Menu';

import './body.styles.css';
const body = () => {
  return (
    <div className='body'>
        <Sidebar/>
        <Menu/>
    </div>
  )
}

export default body