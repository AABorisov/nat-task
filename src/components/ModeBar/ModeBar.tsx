import * as React from 'react';
import { connect } from 'react-redux';
import ModeButton from './ModeButton';
import { ModeEnum } from './types';
import { AppState } from '../../store';

import style = require('./styles.scss');

interface ModeBarStateProps {
  mode: ModeEnum;
}

type ModeBarProps = ModeBarStateProps;

const ModeBar: React.FC<ModeBarProps> = ({ mode }) => {
  const isDashboard = mode === ModeEnum.dashboard;
  return (
    <nav className={style.modeBar}>
      <ModeButton isActive={isDashboard} title="Dashboard mode" toMode={ModeEnum.dashboard} />
      <ModeButton isActive={!isDashboard} title="Edit mode" toMode={ModeEnum.edit} />
    </nav>
  );
};

const mapStateToProps = (state: AppState): ModeBarStateProps => ({
  mode: state.mode,
});

export default connect(mapStateToProps)(ModeBar);
