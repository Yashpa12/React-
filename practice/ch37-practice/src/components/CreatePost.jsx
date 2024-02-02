import { useContext, useRef } from "react";
import { PostContext } from "../store/post-list-data";

const CreatePost = () => {
  const { createpost } = useContext(PostContext);

  const useridElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postagsElement = useRef();
  const postReactionElement = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const userid = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postags = postagsElement.current.value.split("  ");
    const postReaction = postReactionElement.current.value;

    createpost(userid, postBody, postTitle, postags, postReaction);
    useridElement.current.value;
    postTitleElement.current.value =' '
    postBodyElement.current.value =' '
    postagsElement.current.value =' '
    postReactionElement.current.value =' '
  };
  return (
    <>
      <form className="create" onSubmit={handleChange}>
        <div className="mb-3">
          <label htmlFor="User-id" className="form-label">
            User ID
          </label>
          <input
            type="text"
            ref={useridElement}
            className="form-control"
            id="user-id"
            placeholder="Enter the user Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Name
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="Enter the post name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            className="form-control"
            id="body"
            rows="4"
            placeholder="Tell us about the post"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reaction
          </label>
          <input
            type="text"
            className="form-control"
            id="rection"
            ref={postReactionElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Enter here Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={postagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
