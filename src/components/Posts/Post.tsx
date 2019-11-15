import * as React from 'react';
import cx from 'classnames';
import { PostType } from './types';
import AuthorInfo from '../base/AuthorInfo/AuthorInfo';
import PostCard from './PostCard/PostCard';
import { ModeEnum } from '../ModeBar/types';
import PostToolbar from './PostToolbar/PostToolbar';
import PostContent from './PostContent/PostContent';

import styles = require('./styles.scss');

interface PostProps {
  post: PostType;
  mode: ModeEnum;
  onUnpublish: (id: number) => void;
  onPublish: (id: number) => void;
  onRemove: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ post, mode, onUnpublish, onPublish, onRemove }) => {
  const isEdit = mode === ModeEnum.edit;
  const isPublished = post.published;
  const hasImage = !!post.image;
  return (
    <PostCard>
      <div className={cx(styles.postTop, hasImage && styles.postTopBorder)}>
        {isEdit && (
          <PostToolbar
            post={post}
            onUnpublish={onUnpublish}
            onPublish={onPublish}
            onRemove={onRemove}
          />
        )}
        <PostContent
          title={post.title}
          content={post.content}
          additionalContent={post.additionalContent}
          image={post.image}
        />
      </div>
      {isPublished ? (
        <div className={styles.border} />
      ) : (
        <div className={styles.notPublished}>
          <img
            alt="Not Published"
            className={styles.icon}
            src="/public/assets/visibility_off_24px.svg"
          />
          <span>NOT PUBLISHED</span>
        </div>
      )}
      <AuthorInfo author={post.author} className={styles.authorInfo} />
    </PostCard>
  );
};

export default Post;
