import { ThunkFetchState } from '../types';

export interface SettingsResponseData {
  showNotifications: boolean;
}

export interface SettingsState extends SettingsResponseData, ThunkFetchState {}

export const SET_NOTIFICATIONS_SETTINGS = 'SET_NOTIFICATIONS_SETTINGS';
export const FETCH_SETTINGS_PENDING = 'FETCH_SETTINGS_PENDING';
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const FETCH_SETTINGS_ERROR = 'FETCH_SETTINGS_ERROR';

export interface SetNotificationsSettingAction {
  type: typeof SET_NOTIFICATIONS_SETTINGS;
  payload: boolean;
}

export interface FetchSettingsPendingAction {
  type: typeof FETCH_SETTINGS_PENDING;
}

export interface FetchSettingsSuccessAction {
  type: typeof FETCH_SETTINGS_SUCCESS;
  payload: SettingsResponseData;
}

export interface FetchSettingsErrorAction {
  type: typeof FETCH_SETTINGS_ERROR;
}

export type FetchSettingsAction =
  | FetchSettingsPendingAction
  | FetchSettingsSuccessAction
  | FetchSettingsErrorAction;

export type SettingsAction = SetNotificationsSettingAction | FetchSettingsAction;
