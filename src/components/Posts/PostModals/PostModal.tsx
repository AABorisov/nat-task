import * as React from 'react';
import BaseModal from '../../base/BaseModal/BaseModal';
import { PostType } from '../../../store/posts/types';
import Footer from '../../base/BaseModal/Footer';
import AuthorInfo from '../../base/AuthorInfo/AuthorInfo';

import styles = require('./styles.scss');

interface PostModalProps {
  modalPost: PostType;
  onModalClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ modalPost, onModalClose }) => {
  function onActionClick(onAction: Function): (event: React.MouseEvent<HTMLButtonElement>) => void {
    return (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      onAction();
    };
  }
  function footerRender(): JSX.Element {
    return (
      <Footer className={styles.postFooter}>
        <button type="button" onClick={onActionClick(onModalClose)} className={styles.footerBtn}>
          CLOSE
        </button>
      </Footer>
    );
  }
  return (
    <BaseModal footerRender={footerRender} onModalClose={onModalClose}>
      {modalPost.image && (
        <div className={styles.image} style={{ backgroundImage: `url(${modalPost.image})` }} />
      )}
      <div className={styles.flexBetween}>
        <article className={styles.post}>
          <h1 className={styles.postTitle}>{modalPost.title.title}</h1>
          <p className={styles.postContent}>{modalPost.content}</p>
        </article>
        <AuthorInfo author={modalPost.author} className={styles.postAuthor} />
      </div>
    </BaseModal>
  );
};

export default PostModal;
