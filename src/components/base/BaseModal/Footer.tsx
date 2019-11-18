import * as React from 'react';
import cx from 'classnames';

import styles = require('./styles.scss');

interface FooterProps {
  className?: string;
  children: JSX.Element | Array<JSX.Element>;
}
const Footer: React.FC<FooterProps> = ({ children, className }) => {
  return <footer className={cx(styles.footer, className)}>{children}</footer>;
};

export default Footer;
