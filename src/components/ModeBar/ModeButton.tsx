import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModeEnum, path } from './types';

import styles = require('./styles.scss');

interface ModeButtonProps {
  isActive: boolean;
  title: string;
  toMode: ModeEnum;
}

const ModeButton: React.FC<ModeButtonProps> = ({ isActive, title, toMode }) => {
  const className = isActive ? styles.activeModeButton : styles.inactiveModeButton;
  return (
    <Link className={className} to={path[toMode]}>
      {title}
    </Link>
  );
};

export default ModeButton;
