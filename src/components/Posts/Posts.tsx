import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import MainElement from '../Main/MainElement';
import Post from './Post';
import { ModeEnum } from '../ModeBar/types';
import NewPost from './NewPost';
import { AppState } from '../../store';
import { PostsType } from '../../store/posts/types';
import { publishPost, removePost, unpublishPost } from '../../store/posts/actions';

import styles = require('./styles.scss');

interface PostsStateProps {
  mode: ModeEnum;
  posts: PostsType;
}

interface PostsDispatchProps {
  onUnpublish: (id: number) => void;
  onPublish: (id: number) => void;
  onRemove: (id: number) => void;
}

type PostsProps = PostsStateProps & PostsDispatchProps;

const Posts: React.FC<PostsProps> = ({ mode, posts, onUnpublish, onPublish, onRemove }) => {
  const isDashboard: boolean = mode === ModeEnum.dashboard;
  const filteredPosts = isDashboard ? posts.filter(post => post.published) : posts;
  const displayPostsNumber = isDashboard ? 8 : 11;
  const postsToDisplay = filteredPosts.slice(0, displayPostsNumber);

  return (
    <MainElement title="Highlights">
      <div className={styles.posts}>
        {postsToDisplay.map(post => {
          return (
            <Post
              post={post}
              key={post.id}
              mode={mode}
              onUnpublish={onUnpublish}
              onPublish={onPublish}
              onRemove={onRemove}
            />
          );
        })}
        {!isDashboard && <NewPost />}
      </div>
    </MainElement>
  );
};

const mapStateToProps = (state: AppState): PostsStateProps => ({
  mode: state.mode,
  posts: state.posts.posts,
});

const mapDispatchToProps = (dispatch: Dispatch): PostsDispatchProps =>
  bindActionCreators(
    {
      onUnpublish: (id: number) => {
        dispatch(unpublishPost(id));
      },
      onPublish: (id: number) => {
        dispatch(publishPost(id));
      },
      onRemove: (id: number) => {
        dispatch(removePost(id));
      },
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
