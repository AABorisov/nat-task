/* eslint-disable import/prefer-default-export */

import {
  FETCH_SETTINGS_ERROR,
  FETCH_SETTINGS_PENDING,
  FETCH_SETTINGS_SUCCESS,
  SET_NOTIFICATIONS_SETTINGS,
  FetchSettingsErrorAction,
  FetchSettingsPendingAction,
  FetchSettingsSuccessAction,
  SetNotificationsSettingAction,
  SettingsResponseData,
  FetchSettingsAction,
} from './types';
import { getSettings } from '../../utils/api';
import { ThunkResult } from '../types';

export const setNotificationsSetting = (
  showNotifications: boolean
): SetNotificationsSettingAction => ({
  type: SET_NOTIFICATIONS_SETTINGS,
  payload: showNotifications,
});

export const fetchSettingsPending = (): FetchSettingsPendingAction => ({
  type: FETCH_SETTINGS_PENDING,
});

export const fetchSettingsSuccess = (
  showNotifications: SettingsResponseData
): FetchSettingsSuccessAction => ({
  type: FETCH_SETTINGS_SUCCESS,
  payload: showNotifications,
});

export const fetchSettingsError = (): FetchSettingsErrorAction => ({
  type: FETCH_SETTINGS_ERROR,
});

export const fetchSettings = (): ThunkResult<Promise<void>, FetchSettingsAction> => async (
  dispatch
): Promise<void> => {
  dispatch(fetchSettingsPending());
  try {
    const settings = await getSettings();
    dispatch(fetchSettingsSuccess(settings));
  } catch (error) {
    dispatch(fetchSettingsError());
  }
};
