import * as React from 'react';
import ModeBar from './ModeBar/ModeBar';

import styles = require('./styles.scss');

interface LayoutProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <ModeBar />
      </header>
      {children}
      <footer className={styles.footer}>Hosta LLC 2015–2019. Made by AABorisov</footer>
    </div>
  );
};

export default Layout;
