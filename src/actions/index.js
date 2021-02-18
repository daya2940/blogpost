import jsonplaceholder from "../apis/jsonPlaceholder";

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

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};
