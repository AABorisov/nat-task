import { ThunkFetchState } from '../types';

export interface WidgetType {
  title: string;
  icon?: string;
  important?: string | number;
  content: string | Array<string>;
  bigImportant?: boolean;
}

export interface EarningsData {
  earnings: WidgetType;
  linkToStatistics: string;
  graph: {
    background: string;
    foreground: string;
  };
}

export interface StatisticsData {
  employes: WidgetType;
  projects: WidgetType;
  top: WidgetType;
}

export interface EarningsState {
  earnings: EarningsData | {};
}

export interface StatisticsState {
  statistics: StatisticsData | {};
}

export interface WidgetsState extends EarningsState, StatisticsState, ThunkFetchState {}

export const FETCH_WIDGETS_PENDING = 'FETCH_WIDGETS_PENDING';
export const FETCH_WIDGETS_SUCCESS = 'FETCH_WIDGETS_SUCCESS';
export const FETCH_EARNINGS_SUCCESS = 'FETCH_EARNINGS_SUCCESS';
export const FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS';
export const FETCH_WIDGETS_ERROR = 'FETCH_WIDGETS_ERROR';

export interface FetchWidgetsPendingAction {
  type: typeof FETCH_WIDGETS_PENDING;
}

export interface FetchWidgetsSuccessAction {
  type: typeof FETCH_WIDGETS_SUCCESS;
}

export interface FetchWidgetsErrorAction {
  type: typeof FETCH_WIDGETS_ERROR;
}

export interface FetchEarningsSuccess {
  type: typeof FETCH_EARNINGS_SUCCESS;
  payload: EarningsData;
}

export interface FetchStatisticsSuccess {
  type: typeof FETCH_STATISTICS_SUCCESS;
  payload: StatisticsData;
}

export type FetchWidgetsActions =
  | FetchWidgetsPendingAction
  | FetchWidgetsSuccessAction
  | FetchWidgetsErrorAction
  | FetchEarningsSuccess
  | FetchStatisticsSuccess;

export type WidgetsActions = FetchWidgetsActions;
