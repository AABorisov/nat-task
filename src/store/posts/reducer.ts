/* eslint-disable import/prefer-default-export */
import {
  ADD_POST,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  PostsModalType,
  PostsActions,
  PostsState,
  PUBLISH_POST,
  REMOVE_POST,
  SHOW_MODAL,
  UNPUBLISH_POST,
  AuthorType,
} from './types';

const initialState: PostsState = {
  posts: [],
  modal: PostsModalType.NONE,
  modalPost: {},
  pending: false,
  error: false,
  authors: [],
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
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case PUBLISH_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id !== action.payload) {
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
          if (post.id !== action.payload) {
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
        authors: action.payload.posts.reduce((acc, post) => {
          const { author } = post;
          if (acc.find((authorItem: AuthorType) => authorItem.name === author.name)) {
            return acc;
          }
          return [...acc, author];
        }, []),
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: action.payload.modal,
        modalPost: action.payload.modalPost,
      };
    default:
      return state;
  }
}
