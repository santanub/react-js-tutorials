import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer.js"
import tweetsReducer from "./tweetReducer.js"

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers, {
  user: {
    name: "Will",
    age: 32
  },
  tweets: []
});

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({ type: "CHANGE_NAME", payload: "Fred" })
store.dispatch({ type: "CHANGE_AGE", payload: 35 })
