import * as React from 'react';

import styles = require('./styles.scss');

interface PostCardProps {
  children: JSX.Element | Array<JSX.Element>;
  onClick?: (event: React.MouseEvent) => void;
}

const PostCard: React.FC<PostCardProps> = ({ children, onClick }) => {
  return (
    <article className={styles.post} onClick={onClick}>
      {children}
    </article>
  );
};

export default PostCard;
