import * as React from 'react';
import Widget from './Widget';
import Card from './components/Card';

import styles = require('./styles.scss');

// interface EarningsProps {}

const Earnings: React.FC<{}> = () => {
  return (
    <Widget className={styles.earningsWidget}>
      <div className={styles.earnings}>
        <div className={styles.leftSide}>
          <Card
            title="Earnings"
            icon="/public/assets/attach_money_24px.png"
            important={2289.32}
            content="+12% since last year"
            bigImportant
          />
          <span className={styles.allStatistics}>
            ALL STATISTICS
            <img
              alt="Show all statistics"
              src="/public/assets/arrow_forward_24px.png"
              className={styles.icon}
            />
          </span>
        </div>
        <div className={styles.dealsGraphic} />
      </div>
    </Widget>
  );
};

export default Earnings;
