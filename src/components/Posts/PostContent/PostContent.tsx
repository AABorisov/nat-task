import * as React from 'react';
import cx from 'classnames';
import { PostTitle } from '../../../store/posts/types';

import styles = require('./styles.scss');

interface PostContentProps {
  title: PostTitle;
  image: string;
}

const PostContent: React.FC<PostContentProps> = ({ title, image }) => {
  function renderCard(): JSX.Element {
    return (
      <div className={styles.card}>
        <div className={styles.important}>
          <img alt="" src={title.icon} className={styles.icon} />
          <div className={styles.titleGroup}>
            <span
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: title.title.replace(/\w*\S*\d\S*/g, '<mark>$&</mark>'),
              }}
            />
            <span className={styles.content}>{title.content}</span>
          </div>
        </div>
        <span
          className={styles.additionalContent}
          dangerouslySetInnerHTML={{
            __html: title.additionalContent.replace(/\w*\S*\d\S*/g, '<mark>$&</mark>'),
          }}
        />
      </div>
    );
  }
  function renderTitleWithImage(): JSX.Element {
    return (
      <div className={styles.titleWithImage}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className={cx(styles.title, styles.ellipsis)}>{title.title}</div>
        </div>
      </div>
    );
  }
  function renderTitle(): JSX.Element {
    return (
      <div className={styles.postContent}>
        {title.title && <div className={cx(styles.title, styles.ellipsis)}>{title.title}</div>}
      </div>
    );
  }

  return (
    <>
      {!!title.additionalContent && renderCard()}
      {!title.additionalContent && !!image && renderTitleWithImage()}
      {!title.additionalContent && !image && renderTitle()}
    </>
  );
};

export default PostContent;
