import * as React from 'react';
import { PostType } from './types';
import AuthorInfo from '../base/AuthorInfo/AuthorInfo';

import styles = require('./styles.scss');

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <article className={styles.post}>
      <div className={styles.postContent}>
        {post.title && <div className={styles.title}>{post.title}</div>}
        {post.content && <div className={styles.content}>{post.content}</div>}
        {post.additionalContent && (
          <div className={styles.additionalContent}>{post.additionalContent}</div>
        )}
        {post.image && <div className={styles.image}>{post.image}</div>}
      </div>
      {/* <div className={ styles.border }/>*/}
      <AuthorInfo author={post.author} />
    </article>
  );
};

export default Post;
