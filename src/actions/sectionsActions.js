import http from "../http";
import session from "../utils/session";

export function loadSections() {
  let filter = JSON.stringify({include: {relation: "users"}});
  return {
    type: 'SECTIONS_LOAD',
    payload: http.get(`users/${session.userId}/sections`, filter).catch((err) => console.log('handle error'))
  }
}

export function addSection(title) {
  let body = {title: title};

  return (dispatch, getState) => {
    const {user} = getState();
    http.post(`users/${session.userId}/sections`, body)
      .then((section) => {
        dispatch(addSectionFulfilled(section));
        dispatch(attachProfile(user, section.id))
      })
      .catch((err) => console.log('handle error'))
  }
}


export function addSectionFulfilled(section) {
  return {
    type: "SECTION_ADD_FULFILLED",
    payload: section
  }
}


export function attachProfile(profile, sectionId) {
  return {
    type: 'SECTION_ATTACH_PROFILE',
    profile,
    sectionId
  }
}

export function deleteSection(id) {
  return {
    type: 'SECTION_DELETE',
    payload: http.delete(`users/${session.userId}/sections`, id).catch((err) => console.log('handle error'))
  }
}

