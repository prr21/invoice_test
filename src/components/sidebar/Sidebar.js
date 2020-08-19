import React, { useState } from 'react'

import SidebarButton from './SidebarButton';
import './sidebar.sass'

function Sidebar(){

  const [opened, openClose] = useState(false);

  const style = opened
    ? {'transform': 'translate(0, 0)'}
    : null

  return (
    <div className="sidebar" style={style}>

      <span 
        className="sidebar__button"
        onClick={() => openClose(!opened)}>
          <SidebarButton opened={opened}/>
      </span>

      <div className="sidebar__content">

      </div>

    </div>
  )
}

export default Sidebar