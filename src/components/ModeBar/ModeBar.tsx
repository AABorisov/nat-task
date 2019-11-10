import * as React from 'react';
import ModeButton from './ModeButton';
import { ModeEnum } from './types';

import style = require('./styles.scss');

interface ModeBarProps {
  mode?: ModeEnum;
}

const ModeBar: React.FC<ModeBarProps> = ({ mode: defaultMode = ModeEnum.dashboard }) => {
  const [mode, setMode] = React.useState(defaultMode);
  const isDashboard = mode === ModeEnum.dashboard;
  const toggleMode = (): void => {
    if (isDashboard) {
      setMode(ModeEnum.edit);
    } else {
      setMode(ModeEnum.dashboard);
    }
  };
  return (
    <nav className={style.modeBar}>
      <ModeButton
        isActive={isDashboard}
        title="Dashboard mode"
        toMode={ModeEnum.dashboard}
        toggleMode={toggleMode}
      />
      <ModeButton
        isActive={!isDashboard}
        title="Edit mode"
        toMode={ModeEnum.edit}
        toggleMode={toggleMode}
      />
    </nav>
  );
};

export default ModeBar;
