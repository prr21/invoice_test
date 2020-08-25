import React, { useContext } from 'react'

import { UserContext } from '../app/App'
import { toDate } from '../../utils/convert'

export default function SidebarTop() {
  const user = useContext(UserContext)
  
  return (
    <div className="sidebar__content-top">
      <div className="user-info">
        
        <div className="user-info__avatar">
          <img src={user.avatar_url} alt={user.name}></img>
        </div>

        <div className="user-info__bio">
          <div className="user-info__bio-name">
            <a href={user.html_url}>{user.name}</a>
          </div>
          <div className="user-info__bio-created">
            <span>Дата регистрации:</span>
            <b>{toDate(user.created_at)}</b>
          </div>
        </div>

      </div>          
    </div>
  )
}
