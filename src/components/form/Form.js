import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'

import { validPassword, checkUsernameForExist } from '../../utils/validate'
import './form.sass'

function Form({ logged, logIn }){

  const [usernameStatus, setUsernameStatus] = useState({value: ''})
  const [passwordStatus, setPasswordStatus] = useState({value: ''})

  let usernameInp = useRef(null)
  let passwordInp = useRef(null)

  useEffect(() => {
    if (usernameStatus.exist) {
      setSuccess(usernameInp)

    } else if (usernameStatus.errorMsg){
      setError(usernameInp)
    } 

  }, [usernameStatus])

  useEffect(() => {
    if (passwordStatus.valid){
      setSuccess(passwordInp)
      
    } else if (passwordStatus.errorMsg){
      setError(passwordInp)
    } 

  }, [passwordStatus])


  const submitHandler = async event => {
    event.preventDefault()

    const potentialUser = await checkUsernameForExist(usernameStatus.value)
    setUsernameStatus(potentialUser)

    if (potentialUser.exist && passwordStatus.valid){
      logIn(potentialUser.userData)
    }
  }

  // Валидация логина только при submit
  const usernameHandler = event => {
    const value = event.target.value
    setUsernameStatus({value})
  }

  const passwordHandler = event => {
    const value = event.target.value
    const response = validPassword(value)
    setPasswordStatus(response)
  }

  if (logged) return <Redirect to="/"/>
  
  return (
    <div className="content-center justify-content-center">
      <div className="mb-3">
        <img src="https://hhcdn.ru/employer-logo/3247705.png" alt="invoice"/>
      </div>

      <form className="form-signin" onSubmit={submitHandler}>

        <div className="form-group">
          <label>Github Login</label>
          <input
            required
            type="text"
            className="form-control"
            ref={usernameInp}
            onChange={usernameHandler}
          />
          <div className="invalid-feedback">
            {usernameStatus.errorMsg}
          </div>
        </div>
        
        <div className="form-group">
          <label>Пароль</label>
          <input
            required
            type="password"
            className="form-control" 
            ref={passwordInp}
            onChange={passwordHandler}
          />
          <div className="invalid-feedback">
            {passwordStatus.errorMsg}
          </div>
        </div>
        
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
        </div>

      </form>
    </div>
  )
}

function setError(ref){
  ref.current.classList.add('is-invalid')
  ref.current.classList.remove('is-valid')
}

function setSuccess(ref){
  ref.current.classList.remove('is-invalid')
  ref.current.classList.add('is-valid')
}

export default Form