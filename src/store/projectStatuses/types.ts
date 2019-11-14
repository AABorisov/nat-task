import { ThunkFetchState } from '../types';

export interface ProjectStatusType {
  id: number;
  project: string;
  company: string;
  status: number;
  realiseDate: number;
}

export type ProjectStatuses = Array<ProjectStatusType>;

export interface ProjectStatusesResponseData {
  projectStatuses: ProjectStatuses;
}

export interface ProjectStatusesState extends ProjectStatusesResponseData, ThunkFetchState {}

export const REMOVE_PROJECT_STATUS = 'REMOVE_PROJECT_STATUS';
export const FETCH_PROJECT_STATUSES_PENDING = 'FETCH_PROJECT_STATUSES_PENDING';
export const FETCH_PROJECT_STATUSES_SUCCESS = 'FETCH_PROJECT_STATUSES_SUCCESS';
export const FETCH_PROJECT_STATUSES_ERROR = 'FETCH_PROJECT_STATUSES_ERROR';

export interface RemoveProjectStatusAction {
  type: typeof REMOVE_PROJECT_STATUS;
  payload: {
    id: number;
  };
}

export interface FetchProjectStatusesPendingAction {
  type: typeof FETCH_PROJECT_STATUSES_PENDING;
}

export interface FetchProjectStatusesSuccessAction {
  type: typeof FETCH_PROJECT_STATUSES_SUCCESS;
  payload: ProjectStatusesResponseData;
}

export interface FetchProjectStatusesErrorAction {
  type: typeof FETCH_PROJECT_STATUSES_ERROR;
}

export type FetchProjectStatusesActions =
  | FetchProjectStatusesPendingAction
  | FetchProjectStatusesSuccessAction
  | FetchProjectStatusesErrorAction;

export type ProjectStatusesActions = RemoveProjectStatusAction | FetchProjectStatusesActions;
