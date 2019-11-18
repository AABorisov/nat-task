import * as React from 'react';

import styles = require('./styles.scss');

interface GroupWrapperProps {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
}

const GroupWrapper: React.FC<GroupWrapperProps> = ({ title, children }) => {
  return (
    <div className={styles.groupWrapper}>
      <h2 className={styles.groupTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default GroupWrapper;
