import * as React from 'react';
import Widget from './Widget';
import Card from './components/Card';
import { EarningsData } from '../../store/widgets/types';

import styles = require('./styles.scss');

interface EarningsProps {
  earnings?: EarningsData;
  empty: boolean;
}

const Earnings: React.FC<EarningsProps> = ({ earnings, empty }) => {
  return (
    <Widget className={styles.earningsWidget}>
      {!empty && (
        <div className={styles.earnings}>
          <div className={styles.leftSide}>
            <Card card={earnings.earnings} />
            <a
              className={styles.allStatistics}
              href={earnings.linkToStatistics}
              target="_blank"
              rel="noopener noreferrer"
            >
              ALL STATISTICS
              <img
                alt="Show all statistics"
                src="/public/assets/arrow_forward_24px.png"
                className={styles.icon}
              />
            </a>
          </div>
          <div
            className={styles.dealsGraphic}
            style={{
              backgroundImage: `url(${earnings.graph.foreground}), url(${earnings.graph.background})`,
            }}
          />
        </div>
      )}
    </Widget>
  );
};

export default Earnings;
