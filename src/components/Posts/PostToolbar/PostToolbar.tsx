import * as React from 'react';
import { PostType } from '../../../store/posts/types';

import styles = require('./styles.scss');

interface PostToolbarProps {
  post: PostType;
  onUnpublish: (id: number) => void;
  onPublish: (id: number) => void;
  onRemove: (id: number) => void;
}

const PostToolbar: React.FC<PostToolbarProps> = ({ post, onUnpublish, onPublish, onRemove }) => {
  const isPublished = post.published;
  function onUnpublishClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    onUnpublish(post.id);
  }
  function onPublishClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    onPublish(post.id);
  }
  function onRemoveClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.stopPropagation();
    onRemove(post.id);
  }
  return (
    <div className={styles.postToolbar}>
      {isPublished ? (
        <button
          type="button"
          id={`${post.id}_unpublish`}
          className={styles.unpublish}
          onClick={onUnpublishClick}
        >
          UNPUBLISH
        </button>
      ) : (
        <>
          <button
            type="button"
            id={`${post.id}_publish`}
            className={styles.publish}
            onClick={onPublishClick}
          >
            PUBLISH
          </button>
          <button
            type="button"
            id={`${post.id}_remove`}
            className={styles.remove}
            onClick={onRemoveClick}
          >
            REMOVE
          </button>
        </>
      )}
    </div>
  );
};

export default PostToolbar;
