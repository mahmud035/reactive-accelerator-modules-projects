import { actions } from '../actions';

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  // console.log('state inside profileReducer =>', state);
  // console.log('action inside profileReducer =>', action);

  switch (action.type) {
    // Data Fetching
    case actions.profile.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    // Data Fetched
    case actions.profile.DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.data.user,
        posts: action.data.posts,
      };
    }
    // Data Fetch Error
    case actions.profile.DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    // User Data Edited
    case actions.profile.USER_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: action.data,
      };
    }
    // Image Updated
    case actions.profile.IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };
    }
    // User's Post Data Deleted
    case actions.profile.DATA_DELETED: {
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action?.data),
      };
    }
    // User's Post Data Edited

    // Default
    default: {
      return state;
    }
  }
};

export { initialState, profileReducer };
