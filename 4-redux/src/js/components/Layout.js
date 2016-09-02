import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
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
      users: nextProps.users[1].name
    });
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.users}</p>
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
