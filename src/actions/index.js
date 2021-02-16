import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPost = async () => {
  //Bad approach
  const response = await jsonplaceholder.get("/posts");
  return {
    type: "FETCH_POST",
    payload: response,
  };
};
