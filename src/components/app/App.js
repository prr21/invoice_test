import React from 'react';
import Form from '../form/Form';
import './app.sass'
import Sidebar from '../sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar />
  

    <div className="content-center">
      <Form />
    </div>
  </div>    
  );
}

export default App;
