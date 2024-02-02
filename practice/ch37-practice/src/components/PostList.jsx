import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../store/post-list-data";
import Welcomemsg from "./welcome";
import ListSpinner from "./Listspinner";

const PostList = () => {
  const { postlist, createposts } = useContext(PostContext);
  const [feaching, setfeaching] = useState(false);

  useEffect(() => {
    setfeaching(true)
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        createposts(data.posts);
        setfeaching(false)
      });
      
  }, []);

  return (
    <>
    {feaching && <ListSpinner/>}
      {!feaching && postlist.length === 0 && <Welcomemsg />}
      {!feaching &&  postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
