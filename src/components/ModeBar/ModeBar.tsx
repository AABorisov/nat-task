import * as React from 'react';
import ModeButton from './ModeButton';
import { ModeEnum } from './types';

import style = require('./styles.scss');

interface ModeBarProps {
  mode: ModeEnum;
}

const ModeBar: React.FC<ModeBarProps> = ({ mode }) => {
  const isDashboard = mode === ModeEnum.dashboard;
  return (
    <nav className={style.modeBar}>
      <ModeButton isActive={isDashboard} title="Dashboard mode" />
      <ModeButton isActive={!isDashboard} title="Edit mode" />
    </nav>
  );
};

export default ModeBar;
