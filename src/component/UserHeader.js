import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="mt-2">
        <h2>{user.name}</h2>
      </div>
    );
  }
}

//this mapstateToProps is callled again and again when the data in the store changes

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
