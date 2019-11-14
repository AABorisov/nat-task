/* eslint-disable import/prefer-default-export */

import {
  FETCH_SETTINGS_ERROR,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_SUCCESS,
  SET_NOTIFICATIONS_SETTINGS,
  SettingsAction,
  SettingsState,
} from './types';

const initialState: SettingsState = {
  showNotifications: false,
  pending: false,
  error: false,
};

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsAction
): SettingsState {
  switch (action.type) {
    case SET_NOTIFICATIONS_SETTINGS:
      return {
        ...state,
        showNotifications: action.payload,
      };
    case FETCH_SETTINGS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SETTINGS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        pending: false,
      };
    case FETCH_SETTINGS_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}
