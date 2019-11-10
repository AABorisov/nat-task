import { ModeEnum } from '../../components/ModeBar/types';

export const FETCH_WIDGET_EARNINGS = 'FETCH_WIDGET_EARNINGS';
export const FETCH_WIDGET_STATISTICS = 'FETCH_WIDGET_STATISTICS';
export const CHANGE_MODE = 'CHANGE_MODE';

export interface Widget {
  title: string;
  icon?: string;
  important?: string | number;
  content: string | Array<string>;
}

export interface Earnings {
  earnings: Widget;
  linkToStatistics: string;
  graph: object;
}

export interface Statistics {
  employes: Widget;
  projects: Widget;
  top: Widget;
}

export interface AppState {
  mode: ModeEnum;
  widget: {
    earnings: Earnings;
    statistics: Statistics;
  };
}
