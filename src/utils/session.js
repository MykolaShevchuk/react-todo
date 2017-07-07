import store from "../store"

const session = {
  get userId() {
    return store.getState().user.session ? store.getState().user.session.userId : null
  },

  get accessString(){
    const sessionId =  store.getState().user.session ? store.getState().user.session.id : null;
    return `${sessionId ? '?access_token=' + sessionId : '' }`;
  }
};

export default session;

