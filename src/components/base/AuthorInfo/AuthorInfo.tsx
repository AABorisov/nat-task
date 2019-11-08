import * as React from 'react';
import { AuthorType } from '../../Posts/types';

import styles = require('./styles.scss');

interface AuthorInfoProps {
  author: AuthorType;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className={styles.postAuthor}>
      <img alt="" className={styles.authorPhoto} src={`/public/${author.photo}`} />
      <div className={styles.authorInfo}>
        <div className={styles.authorName}>{author.name}</div>
        <div className={styles.authorPosition}>{author.position}</div>
      </div>
    </div>
  );
};

export default AuthorInfo;
