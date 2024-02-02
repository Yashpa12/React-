import { createContext, useReducer } from "react";

export const PostContext = createContext({
  postlist: [],
  createpost: () => {},
  Deletepost: () => {},
  createposts: () => {},
});
const Postreducer = (currentvalue, action) => {
  let newAddvalue = currentvalue;
  if (action.type === "Delete_post") {
    newAddvalue = currentvalue.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "Add_Intial_list") {
    newAddvalue = action.payload.posts;
  } else if (action.type == "Add_list") {
    newAddvalue = [action.payload, ...currentvalue];
  }
  return newAddvalue;
};
const PostlistProvider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(Postreducer, []);

  const createpost = (userid, postBody, postReaction, postTitle, postags) => {
    // console.log(userid,postBody,postReaction,postTitle,postags)
    dispatchpostlist({
      type: "Add_list",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: postReaction,
        userId: userid,
        tags: postags,
      },
    });
  };

  const createposts = (posts) => {
    // console.log(userid,postBody,postReaction,postTitle,postags)
    dispatchpostlist({
      type: "Add_Intial_list",
      payload: {
        posts,
      },
    });
  };
  const Deletepost = (postId) => {
    dispatchpostlist({
      type: "Delete_post",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostContext.Provider
      value={{ postlist, createpost, Deletepost, createposts }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostlistProvider;
