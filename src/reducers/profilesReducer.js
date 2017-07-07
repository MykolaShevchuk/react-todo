const profilesReducer = (state = [], action) => {
  switch (action.type) {
    case 'PROFILES_LOAD_SUCCESS':
      state = action.profiles;
      break;
    case 'PROFILES_LOAD_FAIL':
      state.error = action.error;
      break;
    case 'PROFILE_ADD_TO_SECTION_FULFILLED':

      debugger
      break;
    default:
      break;
  }
  return state;
};

export default profilesReducer;