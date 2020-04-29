import React from 'react'
import MenuBar from '../MenuBar';
import Drawer from '../Drawer';

function dashboard() {
  return (
    <div>
      <div>
        <MenuBar></MenuBar>
      </div>
      <Drawer></Drawer>
    </div>
  )
}

export default dashboard;