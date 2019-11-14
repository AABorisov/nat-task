import * as React from 'react';
import { connect } from 'react-redux';
import Earnings from './Earnings';
import Statistics from './Statistics';
import {
  EarningsData,
  EarningsState,
  StatisticsData,
  StatisticsState,
} from '../../store/widgets/types';
import { AppState } from '../../store';

import isEmpty = require('lodash.isempty');
import styles = require('./styles.scss');

interface WidgetsStateProps extends EarningsState, StatisticsState {}

const Widgets: React.FC<WidgetsStateProps> = ({ earnings, statistics }) => {
  const isEarningsEmpty = isEmpty(earnings);
  const isStatisticsEmpty = isEmpty(statistics);
  return (
    <div className={styles.widgets}>
      <Earnings earnings={earnings as EarningsData} empty={isEarningsEmpty} />
      <Statistics statistics={statistics as StatisticsData} empty={isStatisticsEmpty} />
    </div>
  );
};

const mapStateToProps = (state: AppState): WidgetsStateProps => ({
  earnings: state.widgets.earnings,
  statistics: state.widgets.statistics,
});

export default connect(mapStateToProps)(Widgets);
