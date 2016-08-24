import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

const reducer = function(state= {}, action) {
  switch(action.type) {
  case "FETCH_USER_START": {
    return {...state, fetching: true}
    break;
  }
  case "RECEIVE_USER_ERR": {
    return {...state, fetching: false, error: action.payload}
    break;
  }
  case "RECEIVE_USERS": {
    return {
        ...state,
      fetching: false,
      fetched: true,
      users: action.payload
    }
    break;
  }
  }

  return state;
}

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch((dispatch) => {
  dispatch({ type: "FETCH_USER_START" })
  axios.get("http://rest.learncode.academy/api/wstern/users").then((response) => {
    dispatch({type: "RECEIVE_USERS", payload: response.data})
  }).catch((e) => {
    dispatch({ type: "RECEIVE_USER_ERR", payload: e })
  })
  // do somethink async
})
