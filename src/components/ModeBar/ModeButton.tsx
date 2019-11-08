import * as React from 'react';

import styles = require('./styles.scss');

interface ModeButtonProps {
  isActive: boolean;
  title: string;
}

const ModeButton: React.FC<ModeButtonProps> = ({ isActive = false, title = 'Dashboard mode' }) => {
  const className = isActive ? styles.activeModeButton : styles.inactiveModeButton;
  return (
    <a className={className} href="/">
      {title}
    </a>
  );
};

export default ModeButton;
