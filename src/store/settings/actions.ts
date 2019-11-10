/* eslint-disable import/prefer-default-export */

import {
  FETCH_SETTINGS,
  FetchSettingsAction,
  SET_NOTIFICATIONS_SETTINGS,
  SetNotificationsSettingAction,
} from './types';

export const setNotificationsSetting = (
  showNotifications: boolean
): SetNotificationsSettingAction => ({
  type: SET_NOTIFICATIONS_SETTINGS,
  payload: showNotifications,
});

export const fetchSettings = (showNotifications: boolean): FetchSettingsAction => ({
  type: FETCH_SETTINGS,
  payload: { showNotifications },
});
