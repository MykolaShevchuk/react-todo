import "whatwg-fetch";
import session from "./utils/session";

const apiUrl = "http://0.0.0.0:3000/api";

const http = {
  get: (path, filter) => {
    const url = `${apiUrl}/${path}${session.accessString}${filter ? '&filter='+ filter : ''}`;
    return fetch(url)
      .then(checkStatus)
      .then(res => res.json())
      .catch((err) => errorLogger(err))
  },

  post: (path, body) => {
    const url = `${apiUrl}/${path}${session.accessString}`;
    return fetch(url, options(body, 'POST'))
      .then(checkStatus)
      .then(res => res.status !== 204 ? res.json() : null)
      .catch((err) => errorLogger(err))
  },

  put: (path, body) => {
    const url = `${apiUrl}/${path}/${body ? body.id : ''}${session.accessString}`;
    return fetch(url, options(body, 'PUT'))
      .then(checkStatus)
      .then(res => res.json())
      .catch((err) => errorLogger(err))
  },

  delete: (path, id) => {
    const url = `${apiUrl}/${path}/${id}${session.accessString}`;
    return fetch(url, options(null, 'DELETE'))
      .then(checkStatus)
      .then(res => id)
      .catch((err) => errorLogger(err))
  }
};

const options = (body, method) => {
  return {
    headers: {'Content-Type': 'application/json'},
    method: method,
    body: body ? JSON.stringify(body) : null
  }
};

const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    let error = new Error(res.statusText);
    error.response = res;
    throw error
  }
};

const errorLogger = (err) => {
  console.error("Http error:", err);
  throw err;
};


export default http;