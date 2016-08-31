import axios from "axios";

export function fetchUsers() {
  return function(dispatch) {
    axios.get("http://evening-hollows-5294.herokuapp.com/api/users.json")
      .then((response) => {
        dispatch({ type: "RECEIVE_USER_FULFILLED", payload: response.data })
      })
    .catch((err) => {
      dispatch({ type: "RECEIVE_USER_REJECTED", payload: err })
    })
  }
}
