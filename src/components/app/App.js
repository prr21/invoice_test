import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Form from '../form/Form';
import Cabinet from '../cabinet/Cabinet';
import './app.sass'

function App() {

  const [user, logIn] = useState()
  
  return (
    <Router>
      <Route 
        path="/" exact 
        render={ () => 
          <Cabinet user={user}/>
        }/>

      <Route path="/login" 
        render={ () => 
          <Form logged={user} logIn={logIn}/>
        }/>
  </Router>
  );
}

export default App;
