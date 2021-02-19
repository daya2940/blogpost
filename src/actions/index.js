import jsonplaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => {
  //Bad approach
  // const response = await jsonplaceholder.get("/posts");
  // return {
  //   type: "FETCH_POST",
  //   payload: response,
  // };

  return async (dispatch) => {
    const response = await jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// lodash allow us to get unique data but this wont be available if we want that data quite often.
// So we have used alternative way to do the stuff.

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //to get unique post
  const userId = _.uniq(_.map(getState().posts, "userId"));
  console.log(userId);
  userId.forEach((id) => dispatch(fetchUser(id)));
};
