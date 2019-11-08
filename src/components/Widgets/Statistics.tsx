import * as React from 'react';
import Widget from './Widget';
import Card from './components/Card';

import styles = require('./styles.scss');

// interface StatisticsProps {}

const Statistics: React.FC<{}> = () => {
  return (
    <Widget className={styles.statisticsWidget}>
      <div className={styles.top}>
        <Card
          title="Employes"
          icon="/public/assets/Subtract.png"
          important={62}
          content={`You're in top 24%`}
        />
        <Card
          title="Projects"
          icon="/public/assets/supervised_user_circle_24px.png"
          important={23}
          content="3 in this month"
        />
      </div>
      <Card title="Top specialization" content={['java', 'ruby', 'scala', 'js']} />
    </Widget>
  );
};

export default Statistics;
