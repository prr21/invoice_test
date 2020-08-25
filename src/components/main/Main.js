import React, { useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'

import { UserContext } from '../app/App'
import './main.sass'

export default function Main() {
  const user = useContext(UserContext)

  if (!user){
    return <Redirect to="/login"/>
  }
  
  return (
    <div className="content-center">

      <h1 className="display-4">
        Здравствуйте, {user.name}!
      </h1>

      <div className="row">

        <div className="col-sm">
          <div className="lead">
            <Link to="/terminals">Терминал</Link>
          </div>
        </div>

        <div className="col-sm">
          <div className="lead">
            <Link to="/buyers/">Покупатели</Link>
          </div>
        </div>

      </div>
    </div>
  )
}