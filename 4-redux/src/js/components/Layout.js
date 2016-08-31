import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { fetchUsers } from "../actions/userActions.js"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    //this.props.dispatch(fetchUsers())
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
