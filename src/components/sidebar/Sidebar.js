import React, { useState} from 'react'

import SidebarButton from './SidebarButton';
import SidebarTop from './SidebarTop';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';
import './sidebar.sass'

export default function Sidebar(){

  const [opened, openClose] = useState(false);

  const style = opened
    ? {'transform': 'translate(0, 0)'}
    : null

  return (
    <div className="sidebar" style={style}>
      <SidebarButton opened={opened} openClose={openClose}/>

      <div className="sidebar__content">
        
        <SidebarTop />

        <SidebarBody />

        <SidebarFooter />

      </div>

    </div>
  )
}