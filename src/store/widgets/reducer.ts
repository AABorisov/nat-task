/* eslint-disable import/prefer-default-export */
import {
  FETCH_EARNINGS_SUCCESS,
  FETCH_STATISTICS_SUCCESS,
  FETCH_WIDGETS_ERROR,
  FETCH_WIDGETS_PENDING,
  FETCH_WIDGETS_SUCCESS,
  WidgetsActions,
  WidgetsState,
} from './types';

const initialState: WidgetsState = {
  earnings: {},
  statistics: {},
  pending: false,
  error: false,
};
export function widgetsReducer(
  state: WidgetsState = initialState,
  actions: WidgetsActions
): WidgetsState {
  switch (actions.type) {
    case FETCH_WIDGETS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_WIDGETS_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case FETCH_WIDGETS_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    case FETCH_EARNINGS_SUCCESS:
      return {
        ...state,
        earnings: actions.payload,
      };
    case FETCH_STATISTICS_SUCCESS:
      return {
        ...state,
        statistics: actions.payload,
      };
    default:
      return state;
  }
}
