import { createContext, useReducer } from "react";


export const PostContext = createContext({
  postlist: [],
  createpost: () => {},
  Deletepost: () => {},
  // createposts: () => {},
  
});
const Postreducer = (currentvalue, action) => {
  // console.log(action)
  // console.log(currentvalue)
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

 

  const createpost = (posts) => {
    // console.log(userid,postBody,postReaction,postTitle,postags)

    dispatchpostlist({
      type: "Add_list",
      payload: posts,
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
      value={{ postlist, createpost, Deletepost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostlistProvider;
