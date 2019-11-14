import {
  FetchProjectStatusesErrorAction,
  FetchProjectStatusesPendingAction,
  FetchProjectStatusesSuccessAction,
  RemoveProjectStatusAction,
  FETCH_PROJECT_STATUSES_ERROR,
  FETCH_PROJECT_STATUSES_PENDING,
  FETCH_PROJECT_STATUSES_SUCCESS,
  REMOVE_PROJECT_STATUS,
  ProjectStatusesResponseData,
  FetchProjectStatusesActions,
} from './types';
import { ThunkResult } from '../types';
import { getProjectStatuses } from '../../utils/api';

export const removeProjectStatus = (id: number): RemoveProjectStatusAction => ({
  type: REMOVE_PROJECT_STATUS,
  payload: { id },
});

export const fetchProjectStatusesPending = (): FetchProjectStatusesPendingAction => ({
  type: FETCH_PROJECT_STATUSES_PENDING,
});

export const fetchProjectStatusesSuccess = (
  projectStatuses: ProjectStatusesResponseData
): FetchProjectStatusesSuccessAction => ({
  type: FETCH_PROJECT_STATUSES_SUCCESS,
  payload: projectStatuses,
});

export const fetchProjectStatusesError = (): FetchProjectStatusesErrorAction => ({
  type: FETCH_PROJECT_STATUSES_ERROR,
});

export const fetchProjectStatuses = (): ThunkResult<
  Promise<void>,
  FetchProjectStatusesActions
> => async (dispatch): Promise<void> => {
  dispatch(fetchProjectStatusesPending());
  try {
    const projectStatuses = await getProjectStatuses();
    dispatch(fetchProjectStatusesSuccess(projectStatuses));
  } catch (error) {
    dispatch(fetchProjectStatusesError());
  }
};
