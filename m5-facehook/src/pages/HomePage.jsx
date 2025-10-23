import { useEffect } from 'react';
import { actions } from '../actions';
import NewPost from '../components/posts/NewPost';
import PostList from '../components/posts/PostList';
import useAxios from '../hooks/useAxios';
import usePost from '../hooks/usePost';

const HomePage = () => {
  const { state, dispatch } = usePost();
  const { api } = useAxios();
  const { posts, loading, error } = state || {};

  //* Fetch All Users Posts Data
  useEffect(() => {
    // set loading to true
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          // set posts data to state
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        // set error message to state
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };

    fetchPosts();
  }, [api, dispatch]);

  //* Decide what to render on UI
  let content;

  if (loading) {
    content = <p className="text-center">Fetching Posts Data...</p>;
  } else if (!loading && error) {
    content = <p>{error.message}</p>;
  } else if (!loading && !error && posts.length > 0) {
    content = <PostList posts={posts} />;
  }

  return (
    <>
      <NewPost />
      {content}
    </>
  );
};

export default HomePage;
