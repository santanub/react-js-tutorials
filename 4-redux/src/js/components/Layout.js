import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import Trow from "./Trow";
import { fetchUsers } from "../actions/userActions.js"

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.props.dispatch(fetchUsers())
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.users)
    this.setState({
      users: nextProps.users
    });
  }

  render() {
    return (
      <div>
        <Header />
        <table className="table table-border">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last Sign Time</th>
            </tr>
          </thead>
          <tbody>
           {
             this.state.users.map((user, i) => <Trow key={i} userData={user} /> )
           }
          </tbody>
        </table>
        <p></p>
        <Footer />
      </div>
    );
  }
}

function users(state) {
  return {
    users: state.users
  }
}

export default connect(users)(Layout);
