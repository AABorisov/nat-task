import {
  ADD_POST,
  AddPostAction,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FetchPostsActions,
  FetchPostsErrorAction,
  FetchPostsPendingAction,
  FetchPostsSuccessAction,
  PostsResponseData,
  PostType,
  PUBLISH_POST,
  PublishPostAction,
  REMOVE_POST,
  RemovePostAction,
  UNPUBLISH_POST,
  UnpublishPostAction,
} from './types';
import { ThunkResult } from '../types';
import { getPosts } from '../../utils/api';

export const addPost = (post: PostType): AddPostAction => ({
  type: ADD_POST,
  payload: post,
});

export const removePost = (id: number): RemovePostAction => ({
  type: REMOVE_POST,
  payload: id,
});

export const publishPost = (id: number): PublishPostAction => ({
  type: PUBLISH_POST,
  payload: id,
});

export const unpublishPost = (id: number): UnpublishPostAction => ({
  type: UNPUBLISH_POST,
  payload: id,
});

export const fetchPostsPending = (): FetchPostsPendingAction => ({
  type: FETCH_POSTS_PENDING,
});

export const fetchPostsSuccess = (data: PostsResponseData): FetchPostsSuccessAction => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});

export const fetchPostsError = (): FetchPostsErrorAction => ({
  type: FETCH_POSTS_ERROR,
});

export const fetchPosts = (): ThunkResult<Promise<void>, FetchPostsActions> => async (
  dispatch
): Promise<void> => {
  dispatch(fetchPostsPending());
  try {
    const posts = await getPosts();

    dispatch(fetchPostsSuccess(posts));
  } catch (error) {
    dispatch(fetchPostsError());
  }
};
