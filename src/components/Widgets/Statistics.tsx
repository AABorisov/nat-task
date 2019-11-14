import * as React from 'react';
import Widget from './Widget';
import Card from './components/Card';
import { StatisticsData } from '../../store/widgets/types';

import styles = require('./styles.scss');

interface StatisticsProps {
  statistics: StatisticsData;
  empty: boolean;
}

const Statistics: React.FC<StatisticsProps> = ({ statistics, empty }) => {
  return (
    <Widget className={styles.statisticsWidget}>
      {!empty && (
        <div className={styles.top}>
          <Card card={statistics.employes} />
          <Card card={statistics.projects} />
        </div>
      )}
      {!empty && <Card card={statistics.top} />}
    </Widget>
  );
};

export default Statistics;
