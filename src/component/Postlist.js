import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class Postlist extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    return <div>PostLists</div>;
  }
}

export default connect(null, fetchPost)(Postlist);
