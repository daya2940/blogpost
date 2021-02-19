import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostAndUser } from "../actions";
import UserHeader from "./UserHeader";
import identity from "../assets/identity.svg";

class Postlist extends Component {
  componentDidMount() {
    this.props.fetchPostAndUser();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="d-flex justify-content-center" key={post.id}>
          <div className="card">
            <img src={identity} alt="" />
            <div
              className="card-body"
              style={{ margin: "0 auto", width: "300px" }}
            >
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div> {this.renderList()}</div>;
  }
}

//this mapstateToProps is callled again and again when the data in the store changes

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostAndUser })(Postlist);
