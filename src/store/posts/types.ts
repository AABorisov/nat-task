import { ThunkFetchState } from '../types';

export interface AuthorType {
  name: string;
  position: string;
  photo: string;
}
export interface PostTitle {
  title: string;
  content?: string;
  additionalContent?: string;
  icon?: string;
}
export interface PostType {
  id: number;
  published: boolean;
  title: PostTitle;
  content: string;
  image: string;
  author: AuthorType;
}

export type PostsType = Array<PostType>;

export interface PostsResponseData {
  posts: PostsType;
}

export enum PostsModalType {
  NONE,
  NEW_POST,
  POST,
}

export interface PostsState extends PostsResponseData, ThunkFetchState {
  modal: PostsModalType;
  modalPost: PostType | {};
  authors: Array<AuthorType>;
}

export const REMOVE_POST = 'REMOVE_POST';
export const ADD_POST = 'ADD_POST';
export const PUBLISH_POST = 'PUBLISH_POST';
export const UNPUBLISH_POST = 'UNPUBLISH_POST';
export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const SHOW_MODAL = 'SHOW_MODAL';

export interface RemovePostAction {
  type: typeof REMOVE_POST;
  payload: number;
}

export interface AddPostAction {
  type: typeof ADD_POST;
  payload: PostType;
}

export interface PublishPostAction {
  type: typeof PUBLISH_POST;
  payload: number;
}

export interface UnpublishPostAction {
  type: typeof UNPUBLISH_POST;
  payload: number;
}

export interface FetchPostsPendingAction {
  type: typeof FETCH_POSTS_PENDING;
}

export interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: PostsResponseData;
}

export interface FetchPostsErrorAction {
  type: typeof FETCH_POSTS_ERROR;
}

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
  payload: {
    modal: PostsModalType;
    modalPost: PostType | {};
  };
}

export type FetchPostsActions =
  | FetchPostsPendingAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;

export type PostsActions =
  | FetchPostsActions
  | RemovePostAction
  | AddPostAction
  | PublishPostAction
  | UnpublishPostAction
  | ShowModalAction;
