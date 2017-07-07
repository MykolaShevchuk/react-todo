import http from "../http";
import {attachProfile} from "./sectionsActions";

export function loadProfiles() {
  return (dispatch) => {
     return http.get('users')
      .then(res => dispatch(loadProfilesSuccess(res)))
      .catch(err => {
        // if(err.response.status === 401) {
        //   dispatch(loginUser(null));
        // } else {
        //   dispatch(loadProfilesFail(err))
        // }
      })
  };
}

export function addProfileToSection(userId, sectionId) {
  const userIdParsed = parseInt(userId);

  return (dispatch, getState) => {
    const {profiles} = getState();
    return http.put(`users/${userIdParsed}/sections/rel/${sectionId}`)
      .then((relation) => {
        const profile = profiles.find((user) => user.id === relation.userId);
        dispatch(attachProfile(profile, relation.sectionId));
      })
      .catch((err) => console.log('handle error'))

  }
}

function loadProfilesSuccess(profiles) {
  return {
    type: 'PROFILES_LOAD_SUCCESS',
    profiles
  }
}

function loadProfilesFail(error) {
  return {
    type: 'PROFILES_LOAD_FAIL',
    error
  }
}