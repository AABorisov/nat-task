import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import MainElement from '../Main/MainElement';
import Post from './Post';
import { ModeEnum } from '../ModeBar/types';
import NewPost from './NewPost';
import { AppState } from '../../store';
import { AuthorType, PostsModalType, PostsType, PostType } from '../../store/posts/types';
import {
  addPost,
  publishPost,
  removePost,
  showModal,
  unpublishPost,
} from '../../store/posts/actions';
import PostsModal from './PostModals/PostsModal';

import styles = require('./styles.scss');

interface PostsStateProps {
  mode: ModeEnum;
  posts: PostsType;
  modal: PostsModalType;
  modalPost: PostType | {};
  authors: Array<AuthorType>;
}

interface PostsDispatchProps {
  onUnpublish: (id: number) => void;
  onPublish: (id: number) => void;
  onRemove: (id: number) => void;

  onAddPost: () => void;
  onNewPostPublish: (post: PostType) => void;
  onShowPost: (post: PostType) => void;
  onModalClose: () => void;
}

type PostsProps = PostsStateProps & PostsDispatchProps;

const Posts: React.FC<PostsProps> = ({
  mode,
  posts,
  onUnpublish,
  onPublish,
  onRemove,
  modal,
  modalPost,
  onAddPost,
  onNewPostPublish,
  onShowPost,
  onModalClose,
  authors,
}) => {
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
              onShowPost={onShowPost}
            />
          );
        })}
        {!isDashboard && <NewPost onAddPost={onAddPost} />}
      </div>
      <PostsModal
        modal={modal}
        modalPost={modalPost}
        onModalClose={onModalClose}
        onNewPostPublish={onNewPostPublish}
        authors={authors}
      />
    </MainElement>
  );
};

const mapStateToProps = (state: AppState): PostsStateProps => ({
  mode: state.mode,
  posts: state.posts.posts,
  modal: state.posts.modal,
  modalPost: state.posts.modalPost,
  authors: state.posts.authors,
});

const mapDispatchToProps = (dispatch: Dispatch): PostsDispatchProps =>
  bindActionCreators(
    {
      onUnpublish: unpublishPost,
      onPublish: publishPost,
      onRemove: removePost,
      onAddPost: () => {
        return showModal(PostsModalType.NEW_POST);
      },
      onNewPostPublish: addPost,
      onShowPost: (post: PostType) => {
        return showModal(PostsModalType.POST, post);
      },
      onModalClose: () => {
        return showModal(PostsModalType.NONE);
      },
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
