import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as React from 'react';
import { ModeEnum } from '../ModeBar/types';

import styles = require('./styles.scss');

interface MainProps {
  mode: ModeEnum;
  children: JSX.Element | Array<JSX.Element>;
}

const Main: React.FC<MainProps> = ({ mode, children }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        in
        timeout={1000}
        classNames={mode === ModeEnum.dashboard ? 'SlideIn' : 'SlideOut'}
        unmountOnExit
      >
        <main className={styles.main}>{children}</main>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Main;
