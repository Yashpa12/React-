import { RiChatDeleteLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { useContext } from "react";
import { PostContext } from "../store/post-list-data";

const Post = ({ post }) => {
const {Deletepost} = useContext( PostContext ); 
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
            <RiChatDeleteLine onClick={() => Deletepost(post.id)}  /> {/* Assuming Deletepost takes an argument like post.id */}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge bg-text-primary tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="alert alert-light reaction" role="alert">
        <BiLike />{post.reaction}
      </div>
    </div>
  );
};

export default Post;
