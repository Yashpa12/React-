import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostContext } from "../store/post-list-data";
import Welcomemsg from "./welcome";
import ListSpinner from "./Listspinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postlist } = useContext(PostContext);
const postlist = useLoaderData();
  return (
    <>
      {postlist.length === 0 && <Welcomemsg />}
      {postlist.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </>
  );
};
export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
