import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface PostContentProps {
  title: string;
  content: string;
  additionalContent?: string;
  image: string;
}

const PostContent: React.FC<PostContentProps> = ({ title, content, additionalContent, image }) => {
  function renderCard() {
    return (
      <>
        {title && <div className={styles.title}>{title}</div>}
        {content && <div className={styles.content}>{content}</div>}
        {additionalContent && <div className={styles.additionalContent}>{additionalContent}</div>}
        {/* {image && <div className={styles.image}>{image}</div>}*/}
      </>
    );
  }
  function renderTitleWithImage() {
    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          height: '100%',
          verticalAlign: 'bottom',
          display: 'flex',
        }}
      >
        <div className={cx(styles.postContent, styles.title)}>{title}</div>
      </div>
    );
  }
  function renderContent() {
    return (
      <div className={styles.postContent}>
        {title && <div className={styles.title}>{title}</div>}
        {content && <div className={styles.content}>{content}</div>}
        {additionalContent && <div className={styles.additionalContent}>{additionalContent}</div>}
        {/* {image && <div className={styles.image}>{image}</div>}*/}
      </div>
    );
  }

  return (
    <>
      {!!additionalContent && renderCard()}
      {!additionalContent && !!image && renderTitleWithImage()}
      {!additionalContent && !!content && renderContent()}
    </>
  );
};

export default PostContent;
