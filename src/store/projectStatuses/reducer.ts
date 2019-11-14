/* eslint-disable import/prefer-default-export */
import {
  FETCH_PROJECT_STATUSES_ERROR,
  FETCH_PROJECT_STATUSES_PENDING,
  FETCH_PROJECT_STATUSES_SUCCESS,
  REMOVE_PROJECT_STATUS,
  ProjectStatusesActions,
  ProjectStatusesState,
} from './types';

const initialState: ProjectStatusesState = {
  projectStatuses: [],
  pending: false,
  error: false,
};

export function projectStatusesReducer(
  state: ProjectStatusesState = initialState,
  action: ProjectStatusesActions
): ProjectStatusesState {
  switch (action.type) {
    case REMOVE_PROJECT_STATUS:
      return {
        ...state,
        projectStatuses: state.projectStatuses.filter(
          projectStatus => projectStatus.id !== action.payload.id
        ),
      };
    case FETCH_PROJECT_STATUSES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PROJECT_STATUSES_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload,
      };
    case FETCH_PROJECT_STATUSES_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}
