import * as React from 'react';

import styles = require('./styles.scss');

interface PostCardProps {
  children: JSX.Element | Array<JSX.Element>;
}

const PostCard: React.FC<PostCardProps> = ({ children }) => {
  return <article className={styles.post}>{children}</article>;
};

export default PostCard;
