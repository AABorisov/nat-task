/* eslint-disable import/prefer-default-export */
import {
  ADD_POST,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  PostsActions,
  PostsState,
  PUBLISH_POST,
  REMOVE_POST,
  UNPUBLISH_POST,
} from './types';

const initialState: PostsState = {
  posts: [],
  pending: false,
  error: false,
};

export function postsReducer(state: PostsState = initialState, action: PostsActions): PostsState {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload].concat(state.posts),
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id),
      };
    case PUBLISH_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id !== action.payload.id) {
            return post;
          }
          return {
            ...post,
            published: true,
          };
        }),
      };
    case UNPUBLISH_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id !== action.payload.id) {
            return post;
          }
          return {
            ...post,
            published: false,
          };
        }),
      };
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}
