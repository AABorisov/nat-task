import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModeEnum, path } from './types';

import styles = require('./styles.scss');

interface ModeButtonProps {
  isActive: boolean;
  title: string;
  toMode: ModeEnum;
  toggleMode: () => void;
}

const ModeButton: React.FC<ModeButtonProps> = ({ isActive, title, toMode, toggleMode }) => {
  const className = isActive ? styles.activeModeButton : styles.inactiveModeButton;
  return (
    <Link className={className} to={path[toMode]} onClick={!isActive && toggleMode}>
      {title}
    </Link>
  );
};

export default ModeButton;
