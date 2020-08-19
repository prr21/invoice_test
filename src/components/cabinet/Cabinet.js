import React from 'react'
import { Redirect } from 'react-router-dom'

import './cabinet.sass'

const Cabinet = ({ user }) => {
  if (!user){
    return <Redirect to="/login"/>
  }
  
  return (
    <h1>
      Здравствуйте, {user.name}!
    </h1>
  )
}

export default Cabinet
