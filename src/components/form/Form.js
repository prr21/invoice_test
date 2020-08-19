import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { validPassword, checkLoginForExist } from '../../utils/validate'
import './form.sass'

function Form({ logged, logIn }){

  const [userStatus, sendUserStatus] = useState({value: ''})
  const [passwordStatus, sendPasswordStatus] = useState({value: ''})

  const submitHandler = async event => {
    event.preventDefault()

    const userResponse = await checkLoginForExist(userStatus.value)
    
    if (userResponse.exist && passwordStatus.valid){
      logIn(userResponse.userData)
    }
    sendUserStatus(userResponse)
  }

  const loginHandler = event => {
    const value = event.target.value
    sendUserStatus({value})
  }

  const passwordHandler = event => {
    const value = event.target.value
    const response = validPassword(value)

    if (response.valid){
      response.password = value
    }
    sendPasswordStatus(response)
  }

  if (logged) return <Redirect to="/"/>

  return (
    <div className="content-center">
      <form className="form-signin" onSubmit={submitHandler}>

        <div className="form-group">
          <label htmlFor="login">Github Login</label>
          <input
            required
            type="text" id="login"
            className="form-control" 
            onChange={loginHandler}/>
          <small id="password" className="form-text text-danger">
            {userStatus.errorMsg}
          </small>
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            required
            className="form-control" 
            type="password" id="password"
            onChange={passwordHandler}
          />
          <small id="password" className="form-text text-danger">
            {passwordStatus.errorMsg}
          </small>
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            className="btn btn-primary">
              Войти
          </button>
        </div>

      </form>
    </div>
  )
}

export default Form