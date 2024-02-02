import { RiChatDeleteLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { useContext } from "react";
import { PostContext } from "../store/post-list-data";

const Post = ({ post }) => {
  const { Deletepost } = useContext(PostContext);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <RiChatDeleteLine onClick={() => Deletepost(post.id)} />{" "}
            {/* Assuming Deletepost takes an argument like post.id */}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="alert alert-light reaction" role="alert">
          <h1><BiLike />{post.reactions}</h1>
        </div>
        {post.tags.map((tag)=> {
          return (
          <span className="badge text-bg-primary tag" key={tag}>
            {tag}
          </span>
)})}

        
      </div>
    </div>
  );
};

export default Post;
