import * as React from 'react';
import { connect } from 'react-redux';
import MainElement from '../Main/MainElement';
import Post from './Post';
import { ModeEnum } from '../ModeBar/types';
import NewPost from './NewPost';
import { AppState } from '../../store';
import { PostsType } from '../../store/posts/types';

import styles = require('./styles.scss');

interface PostsStateProps {
  mode: ModeEnum;
  posts: PostsType;
}

type PostsProps = PostsStateProps;

const Posts: React.FC<PostsProps> = ({ mode, posts }) => {
  const isDashboard: boolean = mode === ModeEnum.dashboard;
  const filteredPosts = isDashboard ? posts.filter(post => post.published) : posts;
  const displayPostsNumber = isDashboard ? 8 : 11;
  const postsToDisplay = filteredPosts.slice(0, displayPostsNumber);

  return (
    <MainElement title="Highlights">
      <div className={styles.posts}>
        {postsToDisplay.map(post => {
          return <Post post={post} key={post.id} />;
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

export default connect(mapStateToProps)(Posts);
