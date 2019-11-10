/* eslint-disable import/prefer-default-export */

import {
  FETCH_SETTINGS,
  SET_NOTIFICATIONS_SETTINGS,
  SettingsActionTypes,
  SettingsState,
} from './types';

const initialState: SettingsState = {
  showNotifications: true,
};

export function settingsReducer(state = initialState, action: SettingsActionTypes): SettingsState {
  switch (action.type) {
    case SET_NOTIFICATIONS_SETTINGS:
      return {
        showNotifications: action.payload,
      };
    case FETCH_SETTINGS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
