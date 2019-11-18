import * as React from 'react';
import { AuthorType, PostsModalType, PostType } from '../../../store/posts/types';
import NewPostModal from './NewPostModal';
import PostModal from './PostModal';

interface PostsModalProps {
  modal: PostsModalType;
  modalPost: PostType | {};
  onNewPostPublish: (post: PostType) => void;
  onModalClose: () => void;
  authors: Array<AuthorType>;
}

const PostsModal: React.FC<PostsModalProps> = ({
  modal,
  modalPost,
  onNewPostPublish,
  onModalClose,
  authors,
}) => {
  switch (modal) {
    case PostsModalType.NEW_POST:
      return (
        <NewPostModal
          onNewPostPublish={onNewPostPublish}
          onModalClose={onModalClose}
          authors={authors}
        />
      );
    case PostsModalType.POST:
      return <PostModal modalPost={modalPost as PostType} onModalClose={onModalClose} />;
    case PostsModalType.NONE:
    default:
      return null;
  }
};

export default PostsModal;
