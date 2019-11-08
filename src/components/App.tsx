import * as React from 'react';
import ModeBar from './ModeBar/ModeBar';
import { ModeEnum } from './ModeBar/types';
import Main from './Main/Main';

import style = require('./styles.scss');

const App: React.FC<{}> = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <ModeBar mode={ModeEnum.dashboard} />
      </header>
      <Main mode={ModeEnum.dashboard} />
      <footer className={style.footer}>Hosta LLC 2015–2019. Made by AABorisov</footer>
    </div>
  );
};

export default App;
