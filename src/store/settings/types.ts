export interface SettingsState {
  showNotifications: boolean;
}

export const SET_NOTIFICATIONS_SETTINGS = 'SET_NOTIFICATIONS_SETTINGS';
export const FETCH_SETTINGS = 'FETCH_SETTINGS';

export interface SetNotificationsSettingAction {
  type: typeof SET_NOTIFICATIONS_SETTINGS;
  payload: boolean;
}

export interface FetchSettingsAction {
  type: typeof FETCH_SETTINGS;
  payload: SettingsState;
}

export type SettingsActionTypes = FetchSettingsAction | SetNotificationsSettingAction;
