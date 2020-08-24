import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './sidebar.sass'

function SidebarButton({ opened, openClose }){

  const icon = opened
    ? <FontAwesomeIcon icon={faTimes} size="2x" />
    : <FontAwesomeIcon icon={faBars} size="2x" />

  return (
    <span 
      className="sidebar__button"
      onClick={() => openClose(!opened)}>
        {icon}
    </span>
  )
}

export default SidebarButton