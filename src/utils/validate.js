import githubAPI from "../services/github-service"

const reg = {
  str: /[a-zA-Z]/,
  num: /\d/
}

export const validPassword = password => {
  const status = {
    value: password,
    valid: false
  }
  
  if (password.match(reg.str) === null){
    status.errorMsg = 'Должна быть хотя бы одна латинская буква'
    
  } else if (password.match(reg.num) === null){
    status.errorMsg = 'Должна быть хотя бы одна цифра'

  } else if (password.length < 8){
    status.errorMsg = 'Длина пароля должна быть не менее 8 символов'
    
  } else status.valid = true

  return status
}

export const checkLoginForExist = async (login) => {
  const status = {
    value: login,
    exist: false
  }
  const user = await githubAPI.getUser(login);

  if (!user){
    status.errorMsg = 'Такой пользователь не найден..'

  } else {
    status.exist = true
    status.userData = user
  }
  return status
}