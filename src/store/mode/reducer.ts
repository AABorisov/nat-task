/* eslint-disable import/prefer-default-export */
import { ModeActions, ModeState, SET_MODE } from './types';
import { ModeEnum } from '../../components/ModeBar/types';

const initialState: ModeState = ModeEnum.dashboard;

export function modeReducer(state: ModeState = initialState, action: ModeActions): ModeState {
  switch (action.type) {
    case SET_MODE:
      return action.payload;
    default:
      return state;
  }
}
