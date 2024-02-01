import { createContext, useReducer } from "react";

export const PostContext = createContext({
  postlist: [],
  createpost: () => {},
  Deletepost: () => {},
});
const Postreducer = (currentvalue, action) => {
  let newAddvalue = currentvalue;
  if (action.type === "Delete_post") {
    newAddvalue = currentvalue.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type == 'Add_list'){
    newAddvalue = [action.payload,...currentvalue]
  }
  return newAddvalue;
};
const PostlistProvider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(Postreducer, default_list);

  const createpost = (userid,postBody,postReaction,postTitle,postags) => {
    console.log(userid,postBody,postReaction,postTitle,postags)
    dispatchpostlist ({
      type : 'Add_list',
      payload : {
        id: Date.now(),
    title: postTitle,
    body: postBody,
    reaction: postReaction,
    userId: userid,
    tags:postags,
   
      }
    })
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
    <PostContext.Provider value={{ postlist, createpost, Deletepost }}>
      {children}
    </PostContext.Provider>
  );
};
const default_list = [
  {
    id: "1",
    title: "Go to mumbai",
    body: "i love mumbai i have dream big to travel the all mumbai sports",
    reaction: 2,
    tags: ["mumbai", "enjoy", "dream"],
    userId: "user-9",
  },
  {
    id: "2",
    title: "Pass the BC",
    body: "I am very happy to clear the graduate dregee in computer sciene field . for that I was take Bca field",
    reaction: 12,
    userId: "user-10",
    tags: ["Hapoy", "Bca", "dream"],

    
  },
];
export default PostlistProvider;
