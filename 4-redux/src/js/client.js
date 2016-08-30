import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = function(state= initialState, action) {
  switch(action.type) {
  case "FETCH_USER_PENDING": {
    return {...state, fetching: true}
    break;
  }
  case "RECEIVE_USER_REJECTED": {
    return {...state, fetching: false, error: action.payload}
    break;
  }
  case "RECEIVE_USER_FULFILLED": {
    return {
        ...state,
      fetching: false,
      fetched: true,
      users: action.payload.data
    }
    break;
  }
  }

  return state;
}

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({
  type: "RECEIVE_USER",
  payload: axios.get("https://evening-hollows-5294.herokuapp.com/api/users.json")
})
