import { forwardRef } from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { createpost } = useContext(PostContext);

  return (
    <>
      <Form method="POST" className="create">
        <div className="mb-3">
          <label htmlFor="User-id" className="form-label">
            User ID
          </label>
          <input
            type="text"
            name="use-id"
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
            name="title"
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
            name="body"
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
            name="reation"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Enter here Tags
          </label>
          <input type="text" className="form-control" id="tags" name="tags" />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function creatPost(data) {
  const formData = await data.formData();
  const PostData = Object.fromEntries(formData);
  PostData.tag = PostData.tag.split('')
  console.log(PostData);
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: PostData
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        
      });
  return redirect("/");
}
export default CreatePost;
