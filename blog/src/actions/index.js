import axios from 'axios';



export const FETCH_POSTS = "FEATCH_POSTS";

const API_KEY = "adriana4567klu";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/";


export function featchPosts() {
  const request = axios.get(`${ROOT_URL}posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}