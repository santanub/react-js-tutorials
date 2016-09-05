import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    axios.get("http://localhost:3000/api/users.json")
      .then((response) => {
        dispatch({ type: "RECEIVE_USER_FULFILLED", payload: response.data })
      })
    .catch((err) => {
      dispatch({ type: "RECEIVE_USER_REJECTED", payload: err })
    })
  }
}

export function updateUserName(userId) {
  return function(dispatch) {
    axios.put("http://localhost:3000/api/users/"+ userId +".json")
      .then((response) => {
        dispatch({ type: "UPDATE_NAME_FULFILLED", payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_NAME_REJECTED", payload: err })
    })
  }
}
