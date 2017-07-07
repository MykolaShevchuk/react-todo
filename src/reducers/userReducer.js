const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_FULFILLED':
      state = [...state, action.payload];
      break;
    case 'USER_LOGIN_FULFILLED':
      state = {...state, id: action.payload.userId, session: action.payload};
      break;
    case 'USER_LOGIN_REJECTED':
      state = {...state, session: null};
      break;
    case 'USER_LOGIN':
      state = {...state, session: action.payload};
      break;
    case 'USER_LOGOUT':
      state = {...state, session: action.payload};
      break;
    case 'USER_SET_SESSION_FROM_URL':
      state = {...state, session: action.payload};
      break;
    case 'USER_GET_CURRENT_FULFILLED':
      state = {...state, email: action.payload.email};
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;