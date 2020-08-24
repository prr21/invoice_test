import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import { UserContext } from '../app/App'
import SidebarButton from './SidebarButton';
import './sidebar.sass'

export default function Sidebar(props){

  const [opened, openClose] = useState();
  const user = useContext(UserContext)

  const style = opened
    ? {'transform': 'translate(0, 0)'}
    : null

    // console.log(props);

  return (
    <div className="sidebar" style={style}>
      <SidebarButton opened={opened} openClose={openClose}/>

      <div className="sidebar__content">
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
                {user.created_at}
              </div>
            </div>

          </div>          
        </div>
        <div className="sidebar__content-body">

          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link className={`nav-link active`} to="/">Главная</Link>
            <Link className={`nav-link`} to="/terminals">Терминал</Link>
            <Link className={`nav-link`} to="/buyers/">Покупатели</Link>
          </div>

        </div>
        <div className="sidebar__content-footer border-top">
            <div className="lead text-center bg-light">
              <small>Copyright &copy; 2020</small>
            </div>
        </div>

      </div>

    </div>
  )
}