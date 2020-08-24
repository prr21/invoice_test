import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Form from '../form/Form';
import Sidebar from '../sidebar/Sidebar';
import Cabinet from '../cabinet/Cabinet';
import Buyers from '../buyers/Buyers';
import Terminals from '../terminals/Terminals';
import './app.sass'

export const UserContext = createContext()

function App() {

  const [user, logIn] = useState(
    {
      login: "prr21",
      id: 36272008,
      node_id: "MDQ6VXNlcjM2MjcyMDA4",
      avatar_url: "https://avatars3.githubusercontent.com/u/36272008?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/prr21",
      html_url: "https://github.com/prr21",
      followers_url: "https://api.github.com/users/prr21/followers",
      following_url: "https://api.github.com/users/prr21/following{/other_user}",
      gists_url: "https://api.github.com/users/prr21/gists{/gist_id}",
      starred_url: "https://api.github.com/users/prr21/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/prr21/subscriptions",
      organizations_url: "https://api.github.com/users/prr21/orgs",
      repos_url: "https://api.github.com/users/prr21/repos",
      events_url: "https://api.github.com/users/prr21/events{/privacy}",
      received_events_url: "https://api.github.com/users/prr21/received_events",
      type: "User",
      site_admin: false,
      name: "Kurban",
      company: null,
      blog: "",
      location: null,
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 25,
      public_gists: 0,
      followers: 0,
      following: 3,
      created_at: "2018-02-08T15:37:39Z",
      updated_at: "2020-08-05T17:20:15Z"
    }
  )
  
  const sidebar = user
    ? Sidebar
    : null

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Route component={sidebar}/>

        <Route 
          path="/" exact 
          component={Cabinet}
        />

        <Route path="/login" 
          render={ () => 
            <Form logged={user} logIn={logIn}/>
          }/>
        
        <Route path="/terminals" component={Terminals}/>

        <Route path="/buyers/" component={Buyers}/>
        
      </Router>
    </UserContext.Provider>
  );
}

export default App;
