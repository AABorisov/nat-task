import * as React from 'react';
import PostCard from './PostCard/PostCard';

// import styles = require('./styles.scss');

// interface NewPostProps {}

const NewPost: React.FC<{}> = () => {
  return (
    <PostCard>
      <div>New post</div>
      <div> Create </div>
    </PostCard>
  );
};

export default NewPost;
