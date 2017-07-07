import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {createLogger} from "redux-logger";
import sectionsReducer from "./reducers/sectionsReducer";
import profilesReducer from "./reducers/profilesReducer";
import itemsReducer from "./reducers/itemsReducer";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./reducers/userReducer";
import {loadState, saveState} from "./localStorage";
import thunk from "redux-thunk";

const persistedState = loadState();


const logger = createLogger({
  collapsed: true
});
 /* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(logger, promiseMiddleware(), thunk));

const store = createStore(
  combineReducers({
    sections: sectionsReducer,
    profiles: profilesReducer,
    items: itemsReducer,
    user: userReducer
  }),
  persistedState,
  enhancer
);

store.subscribe(() => {
  saveState({user: store.getState().user})
});


/* eslint-enable */

export default store
