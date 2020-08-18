import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './sidebar.sass'

function SidebarButton({ opened }){

  return opened
    ? <FontAwesomeIcon icon={faTimes} size="2x" />
    : <FontAwesomeIcon icon={faBars} size="2x" />
}

export default SidebarButton