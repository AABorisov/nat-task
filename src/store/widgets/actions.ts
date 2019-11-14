import {
  EarningsData,
  FETCH_EARNINGS_SUCCESS,
  FETCH_STATISTICS_SUCCESS,
  FETCH_WIDGETS_ERROR,
  FETCH_WIDGETS_PENDING,
  FETCH_WIDGETS_SUCCESS,
  FetchEarningsSuccess,
  FetchStatisticsSuccess,
  FetchWidgetsActions,
  FetchWidgetsErrorAction,
  FetchWidgetsPendingAction,
  FetchWidgetsSuccessAction,
  StatisticsData,
} from './types';
import { ThunkResult } from '../types';
import { getWidgetEarnings, getWidgetStatistics } from '../../utils/api';

export const fetchWidgetsPending = (): FetchWidgetsPendingAction => ({
  type: FETCH_WIDGETS_PENDING,
});

export const fetchWidgetsSuccess = (): FetchWidgetsSuccessAction => ({
  type: FETCH_WIDGETS_SUCCESS,
});

export const fetchWidgetsError = (): FetchWidgetsErrorAction => ({
  type: FETCH_WIDGETS_ERROR,
});

export const fetchEarningsSuccess = (data: EarningsData): FetchEarningsSuccess => ({
  type: FETCH_EARNINGS_SUCCESS,
  payload: data,
});

export const fetchStatisticsSuccess = (data: StatisticsData): FetchStatisticsSuccess => ({
  type: FETCH_STATISTICS_SUCCESS,
  payload: data,
});

export const fetchWidgets = (): ThunkResult<Promise<void>, FetchWidgetsActions> => async (
  dispatch
): Promise<void> => {
  dispatch(fetchWidgetsPending());
  try {
    const earnings = await getWidgetEarnings();
    dispatch(fetchEarningsSuccess(earnings));
    const statistics = await getWidgetStatistics();
    dispatch(fetchStatisticsSuccess(statistics));
    dispatch(fetchWidgetsSuccess());
  } catch (error) {
    dispatch(fetchWidgetsError());
  }
};
