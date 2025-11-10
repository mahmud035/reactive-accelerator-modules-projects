import { actions } from '../actions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    // Data Fetching
    case actions.post.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    // Data Fetched
    case actions.post.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        posts: action.data,
      };
    }
    // Data Fetch Error
    case actions.post.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    // Data Created
    case actions.post.DATA_CREATED: {
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.data],
      };
    }
    // Data Deleted
    case actions.post.DATA_DELETED: {
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action?.data),
      };
    }
    // Data Edited
    case actions.post.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post) => {
          if (post.id === action.data.id) {
            return action.data;
          } else {
            return post;
          }
        }),
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

export { initialState, postReducer };
