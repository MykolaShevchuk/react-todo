import http from "../http";

export function registerUser(user) {
  return {
    type: 'USER_REGISTER',
    payload: http.post('users', user).catch((err) => console.log('handle error'))
  }
}

export function loginUser(user) {
  return {
    type: 'USER_LOGIN',
    payload: http.post('users/login', user).catch((err) => console.log('handle error'))
  }
}

export function getCurrentUser(session) {
  const userId  = session.userId;
  return {
    type: 'USER_GET_CURRENT',
    payload: http.get(`users/${userId}`).catch((err) => console.log('handle error'))
  }
}

export function setSessionFromUrl(session) {
  return {
    type: 'USER_SET_SESSION_FROM_URL',
    payload: session
  }
}

export function logoutUser() {
  return {
    type: 'USER_LOGOUT'
  }
}