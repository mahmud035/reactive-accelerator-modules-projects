import { createContext, useReducer, useState } from 'react';
import { initialState, postReducer } from '../reducers/PostReducer';

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const [showPostEntry, setShowPostEntry] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const postInfo = {
    state,
    dispatch,
    showPostEntry,
    setShowPostEntry,
    editPost,
    setEditPost,
  };

  return (
    <PostContext.Provider value={postInfo}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
