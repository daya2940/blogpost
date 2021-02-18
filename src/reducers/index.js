import { combineReducers } from "redux";
import postsReducers from "./PostReducers";
import UserReducers from "./UserReducers";

export default combineReducers({
  posts: postsReducers,
  user: UserReducers,
});
