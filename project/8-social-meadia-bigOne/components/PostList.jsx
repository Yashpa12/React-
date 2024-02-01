import { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../store/post-list-data";

const PostList = () => {
  const { postlist } = useContext(PostContext);
  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
     
    </>
  );
};
export default PostList;
