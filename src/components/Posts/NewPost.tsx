import * as React from 'react';
import PostCard from './PostCard/PostCard';

import styles = require('./styles.scss');

interface NewPostProps {
  onAddPost: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ onAddPost }) => {
  function onNewPostClick(event: React.MouseEvent): void {
    event.preventDefault();
    onAddPost();
  }
  return (
    <PostCard>
      <div className={styles.newPostTop}>
        <img
          alt="New Post"
          className={styles.newPostIcon}
          src="/public/assets/add_circle_outline_24px.png"
        />
        New post
      </div>
      <div className={styles.border} />
      <div className={styles.create}>
        <button type="button" onClick={onNewPostClick} className={styles.btn}>
          Create
        </button>
      </div>
    </PostCard>
  );
};

export default NewPost;
