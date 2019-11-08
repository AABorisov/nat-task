import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface MainElementProps {
  children?: JSX.Element | Array<JSX.Element>;
  className?: string;
  title?: string;
}

const MainElement: React.FC<MainElementProps> = ({ children, className, title }) => {
  return (
    <section className={cx(styles.mainElement, className)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default MainElement;
