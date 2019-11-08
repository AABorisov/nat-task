import * as React from 'react';
import Earnings from './Earnings';
import Statistics from './Statistics';

import styles = require('./styles.scss');

// interface WidgetsProps {}

const Widgets: React.FC<{}> = () => {
  return (
    <div className={styles.widgets}>
      <Earnings />
      <Statistics />
    </div>
  );
};

export default Widgets;
